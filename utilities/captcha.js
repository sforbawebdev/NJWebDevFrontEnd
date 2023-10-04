"use server"

import axios from "axios"

export async function verifyCaptchaAction(token) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRETKEY}&response=${token}`
  )
  console.log(res.data);
  if (res.data.score > 0.5) {
    return true
  } else {
    return false
  }
}