
import { usePage } from '@inertiajs/react'

export function getImageAsset(image) {
    if (image && !image.startsWith('http')) {
        return `/images/${image}`;
    }
    return '/assets/admin/images/noimage.webp';
}

export function formatPrice(amount, currency = 'INR') {
    const { currency_code } = usePage().props;
    currency = currency_code;
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}
export function formatDateTime(date, options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) {
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export function formatDate(date, options = { year: 'numeric', month: 'short', day: 'numeric' }) {
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

export function statusIcon(status = 0) {
    var Icn = '';
    var title = '';
    if(status == 1){
        Icn = `bi-check fs-2 text-success`;
        title = "Active";
    }
    else if(status == 0){
        Icn = `bi-eye-slash fs-20 text-info`;
        title = "Inactive";
    }
    else if(status == -1){
        Icn = `bi-ban fs-20 text-danger`;
        title = "Suspended";
    }
    else{
        Icn = `bi-hourglass-split fs-2 text-warning`;
        title = "Pending";
    }

    return `<span role="button" class="bi `+Icn+`" title='`+ title +`'></span>`;
}