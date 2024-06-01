"use client"

import React from 'react';
import { motion } from "framer-motion";

const AnimatedSection = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => { 
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
