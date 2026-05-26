"use client"

import React, { useState } from "react"
import styles from "@/styles/carousel.module.css"

export interface CarouselItem {
  id: string
  label: string
  title: string
  description: string
  icon: React.ReactNode
  color?: string
}

interface InteractiveCarouselProps {
  items: CarouselItem[]
  defaultSelected?: string
}

export function InteractiveCarousel({
  items,
  defaultSelected = items[0]?.id,
}: InteractiveCarouselProps) {
  const [selected, setSelected] = useState(defaultSelected)

  return (
    <div className={styles.scene}>
      <div className={styles.leftZone}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <input
                type="radio"
                id={`radio_${item.id}`}
                name="carousel"
                value={item.id}
                checked={selected === item.id}
                onChange={(e) => setSelected(e.target.value)}
                className={styles.radio}
              />
              <label
                htmlFor={`radio_${item.id}`}
                className={`${styles.label} ${styles[`label_${item.id}`]}`}
                style={{
                  borderRightColor:
                    selected === item.id ? item.color || "#FF4500" : undefined,
                  color:
                    selected === item.id ? item.color || "#FF4500" : undefined,
                }}
              >
                {item.label}
              </label>
              <div
                className={`${styles.content} ${styles[`content_${item.id}`]}`}
                style={{
                  display: selected === item.id ? "flex" : "none",
                }}
              >
                <div
                  className={styles.picto}
                  style={{ color: item.color || "#FF4500" }}
                >
                  {item.icon}
                </div>
                <h1 style={{ color: item.color || "#FF4500" }}>
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.middleBorder} />
      <div className={styles.rightZone} />
    </div>
  )
}
