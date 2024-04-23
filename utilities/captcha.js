"use server"

import axios from "axios"

export async function verifyCaptchaAction(token) {
  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRETKEY}&response=${token}`
    )
    console.log('res data: ',res);
    if (res?.data?.score > 0.5) {
      return true
    } else {
      return false
    }
  } catch(e) {
    console.log("error: ", e);
    return false;
  }
}