'use client'

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 max-w-4xl">
                <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
                >
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    <p className="text-lg">
                        I'm always looking to learn more, and I'm always looking to help. 
                        If you have any questions, please don't hesitate to reach out.
                    </p>
                </motion.section>
            </main>
        </div>
    )
}