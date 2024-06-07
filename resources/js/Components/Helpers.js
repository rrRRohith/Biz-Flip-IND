
export function getImageAsset(image) {
    if (image && !image.startsWith('http')) {
        return `/images/${image}`;
    }
    return '/assets/admin/images/noimage.webp';
}

export function formatPrice(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}

export function formatDateTime(date, options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) {
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export function formatDate(date, options = { year: 'numeric', month: 'long', day: 'numeric' }) {
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
}


export function formatTime(time, options = { hour: '2-digit', minute: '2-digit' }) {
    return new Intl.DateTimeFormat('en-US', options).format(new Date(time));
}

export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}