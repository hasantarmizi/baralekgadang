export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Yahya Nuddin, S.Pd',
            child: 'Anak Ke 5',
            father: 'Sudirman (Alm)',
            mother: 'Masrelan',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Dingin Sari Lubis, S.Pd',
            child: 'Anak ke 6',
            father: 'Fahri Lubis (Alm)',
            mother: 'Rosidah Nasution (Alm)',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Mei',
            date: '20',
            day: 'Rabu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            },
            address: 'Desa Parmompang, Kecamatan Panyabungan Timur, Mandailing Natal'
        },
        reception: {
            year: '2026',
            month: 'Mei',
            date: '21',
            day: 'Kamis',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            },
            address: 'Desa Lumban Dolok, Kecamatan Siabu, Mandailing Natal'
        }
    },

    link: {
        calendar: 'https://calendar.app.google/q832pFfbeHqGVXxHA',
        map: 'https://maps.app.goo.gl/Hy9Z4Tn1TaoVd4Bg7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Yahya Nuddin',
            icon: './src/assets/images/bsi.png',
            rekening: '7174379461'
        },
        {
            id: 2,
            name: 'Dingin Sari Lubis',
            icon: './src/assets/images/mandiri.png',
            rekening: '1830006854797'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwh8HeeGEfL8nMOGgy0o6l-A4ERKQnCWX5dFBz9oOANhoH8oyzJwWoWUVk835Iwl0ngDw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}