'use client'

import { usePushNotifications } from "@/core/hookss/usePushNotifications"
import type { Button } from "./ui/button"

export default function PushButton() {
    const { sendNotification } = usePushNotifications()

    const handleClick = () => {
        sendNotification({
            title: 'Hello, world!',
            body: 'This is a detailed notification body.',
            icon: '/public/logo.svg',
            tag: 'unique-tag', // Notifications with the same tag will stack
            requireInteraction: true, // Keeps the notification open until the user interacts with it
            silent: false // Whether the notification should be silent
        })
    }

    return (
        <button onClick={handleClick} className='btn'>  Enable Push Notifications</button>
    )
}
