export const DOCTOR_ADDR = "0x37805Af6db918983E6B43ED1B7638fdbABCC8C17";
export const PATIENT_ADDR = "0x9E049eFE48D329552D1aC559d418564980eaBcAE";
export const DOCTOR_ABI = [
  {
    constant: false,
    inputs: [
      { 
        internalType: "address",
        name: "doc",
        type: "address",
      },
    ],
    name: "addDoctor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "doc",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "updateFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "doc",
        type: "address",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "doc",
        type: "address",
      },
    ],
    name: "isDoctor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
export const PATIENT_ABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "pat",
        type: "address",
      },
    ],
    name: "addPatient",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "doc",
        type: "address",
      },
      {
        internalType: "address",
        name: "pat",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "addAuthorization",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "pat",
        type: "address",
      },
    ],
    name: "viewPrescription",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "presc",
        type: "string",
      },
      {
        internalType: "address",
        name: "pat",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "doc",
        type: "address",
      },
    ],
    name: "setPrescription",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "doc",
        type: "address",
      },
      {
        internalType: "address",
        name: "pat",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "pat",
        type: "address",
      },
    ],
    name: "isPatient",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
