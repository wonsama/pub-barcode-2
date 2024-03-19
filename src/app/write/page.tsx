"use client";

import Barcode, { Renderer } from "react-jsbarcode";
import React, { useEffect, useRef, useState } from "react";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Link from "next/link";

export default function Home() {
  // const [barcode, setBarcode] = useState('');
  const inpBarCode = useRef<HTMLInputElement>(null);
  const [barcode, setBarcode] = useState<string>("");
  const [barcodeValid, setBarcodeValid] = useState<boolean>(false);

  function onUpdateBarcode() {
    const _barcode = inpBarCode.current!.value;
    setBarcode(_barcode);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WRITE MODE
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          BarCode RW © 2024
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {barcodeValid ? (
          <Barcode
            value={barcode}
            options={{
              format: "code128",
              width: 2,
              valid: (isValid) => {
                setBarcodeValid(isValid);
              }, //
            }}
            renderer={"image" as Renderer}
          />
        ) : (
          <>
            <div>바코드를 입력해주세요</div>
            <Barcode
              style={{ display: "none" }}
              value={barcode}
              options={{
                format: "code128",
                valid: (isValid) => {
                  setBarcodeValid(isValid);
                }, //
              }}
              renderer={"image" as Renderer}
            />
          </>
        )}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-2 lg:text-center gap-4">
        <input
          ref={inpBarCode}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onUpdateBarcode();
            }
          }}
          className="hover:cursor-pointer rounded-md  px-3.5 py-2.5 text-sm font-semibold text-black  outline outline-2 outline-offset-0 outline-gray-300
        ocus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        />
        <div
          onClick={() => {
            onUpdateBarcode();
          }}
          className="hover:cursor-pointer rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          바코드 생성
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 lg:text-center gap-4">
        <div className="hover:cursor-pointer rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
          <Link href="/read" replace>
            바코드 읽기
          </Link>
        </div>
      </div>
    </main>
  );
}
