"use client";

import { useCallback, useState } from "react";

import { AdvancedExample } from "./AdvancedExample";
import Link from "next/link";
import { ScannerExample } from "./ScannerExample";

enum Example {
  Scanner = "scanner",
  Advanced = "advanced",
}

export default function Home() {
  const [selectedExample, selectExample] = useState<Example>(Example.Advanced);
  const [lastScannedCode, setLastScannedCode] = useState<string | undefined>(
    undefined
  );
  const handleCodeScanned = useCallback((code: string) => {
    setLastScannedCode(code);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          READ MODE
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          BarCode RW © 2024
        </div>
      </div>

      <div className="place-items-center before:w-full">
        {selectedExample === Example.Scanner && (
          <ScannerExample onCodeScanned={handleCodeScanned} />
        )}
        {selectedExample === Example.Advanced && (
          <AdvancedExample onCodeScanned={handleCodeScanned} />
        )}
      </div>
      <div>Last scanned code: {lastScannedCode}</div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-1 lg:text-center gap-4">
        <div className="hover:cursor-pointer rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
          <Link href="/write" replace>
            바코드 쓰기
          </Link>
        </div>
      </div>
    </main>
  );
}
