'use client'
import * as React from 'react'
import { ModeToggle } from '@/modules/home/page'

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm">
				<p className="fixed top-0 left-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-8 pb-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
					Mi aplicación con Next.js 15 y Tailwind v4
				</p>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
					<ModeToggle />
				</div>
			</div>
		</main>
	)
}
