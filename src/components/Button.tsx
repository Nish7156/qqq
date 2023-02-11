import React from "react";
import Link from "next/link";

function Button({ type, size, link, children, target }: any) {
  return (
    <>
      {link ? (
        <Link href={`${link}`} prefetch={false} target={target}>
          <ButtonSpan type={type} size={size}>
            {children}
          </ButtonSpan>
        </Link>
      ) : (
        <button>
          <ButtonSpan type={type} size={size}>
            {children}
          </ButtonSpan>
        </button>
      )}
    </>
  );
}

export default Button;

const ButtonSpan = ({ children, type, size }: any) => {
  return (
    <span
      className={`  rounded-md  ${
        type == "secondary"
          ? "bg-primary text-white  border border-primary text-primary bg-transparent"
          : "bg-primary text-white "
      } ${size == "sm" ? "py-1 px-4 text-sm" :"py-2 px-4 text-base"}
          `}
    >
      {children}
    </span>
  );
};
