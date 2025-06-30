import { atom } from "recoil";

export const userNameAtom = atom({
    key: "userName",
    default: "아기사자",
});

export const emailAtom = atom({
    key: "email",
    default: "likelion@cau.ac.kr",
});

export const isSubmittedAtom = atom({
    key: "isSubmitted",
    default: false,
})

export const birthDateAtom = atom({
  key: "birthDate",
  default: "2000.01.01",
});
