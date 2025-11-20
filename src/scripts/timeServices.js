export function getCurrentTime(timezone) {
    const now = new Date()
    return now.toLocaleString("id-ID", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
}

export const timezones = [
    "Asia/Jakarta",
    "Asia/Singapore",
    "Asia/Tokyo",
    "Europe/London",
    "Europe/Paris",
    "America/New_York",
    "America/Los_Angeles",
]