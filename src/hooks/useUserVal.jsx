import { useState, useEffect } from "react";
import Web3 from "web3";

export const useUserVal = () => {
  const [user, setUser] = useState();
  //   console.log(user);
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  //   console.log(web3);
  useEffect(() => {
    console.log("HERE");
    const checkUser = async () => {
      //   console.log("HERE");
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      setUser(accounts[0]);
    };
    if (user == undefined) {
      checkUser();
    } else {
      console.log(user);
    }
  });
  window.ethereum.on("accountsChanged", function (accounts) {
    setUser(accounts[0]);
  });
  //   console.log(user);
  return user;
};
