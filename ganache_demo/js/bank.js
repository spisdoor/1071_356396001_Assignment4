let bankBytecode =
  "608060405260008054600160a060020a03191633179055610876806100256000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631d00e26881146100925780632e1a7d4d1461009f57806341c0e1b5146100b757806363fcae5e146100cc5780637b83b50b146100e4578063a9059cbb1461010b578063d0e30db01461013c578063dd3cfb1214610144575b600080fd5b61009d600435610159565b005b3480156100ab57600080fd5b5061009d6004356102e2565b3480156100c357600080fd5b5061009d6103db565b3480156100d857600080fd5b5061009d600435610465565b3480156100f057600080fd5b506100f961062f565b60408051918252519081900360200190f35b34801561011757600080fd5b5061009d73ffffffffffffffffffffffffffffffffffffffff60043516602435610642565b61009d610733565b34801561015057600080fd5b5061009d61078b565b336000908152600160205260409020543411156101c0576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b6001811015610219576040805160e560020a62461bcd02815260206004820152601760248201527f796f757220706572696f642073686f756c64203e3d2031000000000000000000604482015290519081900360640190fd5b600c811115610272576040805160e560020a62461bcd02815260206004820152601860248201527f796f757220706572696f642073686f756c64203c3d2031320000000000000000604482015290519081900360640190fd5b336000818152600260209081526040808320805460018452828520805434920182900390559081905560038352928190208590558051928352429183019190915280517f7cdeb8fe311ce0bee63b925249f3092a056e1a294cd1ca6d766da31f264bf24b9281900390910190a250565b33600090815260016020526040902054670de0b6b3a7640000820290811115610355576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051339082156108fc029083906000818181858888f19350505050158015610382573d6000803e3d6000fd5b5033600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461044a576040805160e560020a62461bcd02815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b600060018210156104c0576040805160e560020a62461bcd02815260206004820152601760248201527f796f757220706572696f642073686f756c64203e3d2031000000000000000000604482015290519081900360640190fd5b3360009081526003602052604090205482111561054c576040805160e560020a62461bcd028152602060048201526024808201527f796f757220706572696f642073686f756c64203c3d20796f757220434420706560448201527f72696f6400000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b33600090815260036020908152604080832054600290925290912054606490820204830281151561057957fe5b3360008181526002602090815260408083205460019092528083208054969095049091019485019093559151929350916108fc84150291849190818181858888f193505050501580156105d0573d6000803e3d6000fd5b5033600081815260026020908152604080832083905560038252808320929092558151848152429181019190915281517fdf47f25e2c45895f8e43e8b0401b240ca348f2700f7c18b4dce8ec5a66419d8f929181900390910190a25050565b3360009081526001602052604090205490565b33600090815260016020526040902054670de0b6b3a76400008202908111156106b5576040805160e560020a62461bcd02815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b3360008181526001602090815260408083208054869003905573ffffffffffffffffffffffffffffffffffffffff8716808452928190208054860190558051868152429281019290925280519293927fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69281900390910190a3505050565b336000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b336000818152600360209081526040808320546002835281842054600190935281842080546064928502929092049093019081019092555190929183156108fc02918491818181858888f193505050501580156107ec573d6000803e3d6000fd5b5033600081815260026020908152604080832083905560038252808320929092558151848152429181019190915281517f7a4276e0f0786f542dbd28413b6b6b0085203bfad5f1c88b11640568257718a3929181900390910190a2505600a165627a7a72305820c929de7ca296c2de926dfe0a5a58e630e835b50748646775fe00b6f387b165ff0029";

let bankAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "CD_period_",
        "type": "uint256"
      }
    ],
    "name": "CD_deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "etherValue",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "finished_period",
        "type": "uint256"
      }
    ],
    "name": "CD_withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBankBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "etherValue",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "CD_all_withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "DepositEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "WithdrawEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "TransferEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "CD_DepositEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "CD_WithdrawEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "CD_all_WithdrawEvent",
    "type": "event"
  }
]
