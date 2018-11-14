pragma solidity ^0.4.23;

contract Bank {
    // 此合約的擁有者
    address private owner;

    // 儲存所有會員的餘額
    mapping (address => uint256) private balance;

    mapping (address => uint256) private CD_balance;
    mapping (address => uint256) private CD_period;

    // 事件們，用於通知前端 web3.js
    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);

    event CD_DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event CD_WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event CD_all_WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);

    modifier isOwner() {
        require(owner == msg.sender, "you are not owner");
        _;
    }

    // 建構子
    constructor() public payable {
        owner = msg.sender;
    }

    // 存錢
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

    // CD 存錢
    function CD_deposit(uint256 CD_period_) public payable {
        require(balance[msg.sender] >= msg.value, "your balances are not enough");
        require(CD_period_ >= 1, "your period should >= 1");
        require(CD_period_ <= 12, "your period should <= 12");
        balance[msg.sender] += CD_balance[msg.sender];
        balance[msg.sender] -= msg.value;
        CD_balance[msg.sender] = msg.value;
        CD_period[msg.sender] = CD_period_;
        emit CD_DepositEvent(msg.sender, msg.value, now);
    }

    // CD all 提錢
    function CD_all_withdraw() public {
        uint256 weiValue = (CD_balance[msg.sender] + CD_balance[msg.sender] * CD_period[msg.sender] / 100);
        balance[msg.sender] += weiValue;
        msg.sender.transfer(weiValue);
        CD_balance[msg.sender] = 0;
        CD_period[msg.sender] = 0;
        emit CD_all_WithdrawEvent(msg.sender, weiValue, now);
    }

    // CD 提錢
    function CD_withdraw(uint256 finished_period) public {
        require(finished_period >= 1, "your period should >= 1");
        require(finished_period <= CD_period[msg.sender] , "your period should <= your CD period");
        uint256 weiValue = (CD_balance[msg.sender] + CD_balance[msg.sender] * CD_period[msg.sender] / 100 * finished_period / CD_period[msg.sender]);   
        balance[msg.sender] += weiValue;
        msg.sender.transfer(weiValue);
        CD_balance[msg.sender] = 0;
        CD_period[msg.sender] = 0;
        emit CD_WithdrawEvent(msg.sender, weiValue, now);
    }

    // 提錢
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

    // 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }

    // 檢查銀行帳戶餘額
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }

    function kill() public isOwner {
        selfdestruct(owner);
    }
}
