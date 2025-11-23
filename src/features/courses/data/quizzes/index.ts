import { CourseQuiz } from '@/types/quiz';

export const courseQuizzes: CourseQuiz[] = [
  // HTML & CSS Introduction
  {
    courseId: 'html-css-intro',
    questions: [
      {
        id: 'html-css-intro-1',
        question: 'Apa fungsi utama dari HTML dalam pengembangan web?',
        options: [
          'Memberikan struktur dan konten pada halaman web',
          'Membuat halaman web menjadi interaktif',
          'Mengatur tampilan dan styling halaman web',
          'Menghubungkan halaman web dengan database'
        ],
        correctAnswer: 0,
        explanation: 'HTML (HyperText Markup Language) digunakan untuk memberikan struktur dan konten pada halaman web, seperti heading, paragraf, gambar, dan link.'
      },
      {
        id: 'html-css-intro-2',
        question: 'Tag HTML mana yang digunakan untuk membuat hyperlink?',
        options: [
          '<link>',
          '<a>',
          '<href>',
          '<url>'
        ],
        correctAnswer: 1,
        explanation: 'Tag <a> (anchor) digunakan untuk membuat hyperlink dengan atribut href untuk menentukan URL tujuan.'
      },
      {
        id: 'html-css-intro-3',
        question: 'Apa perbedaan utama antara CSS inline dan external CSS?',
        options: [
          'Inline CSS lebih cepat dari external CSS',
          'External CSS dapat digunakan untuk banyak halaman, inline CSS hanya untuk satu elemen',
          'Inline CSS lebih aman dari external CSS',
          'External CSS tidak support semua properti CSS'
        ],
        correctAnswer: 1,
        explanation: 'External CSS ditulis dalam file terpisah (.css) dan dapat digunakan untuk banyak halaman HTML, sedangkan inline CSS ditulis langsung pada atribut style elemen dan hanya berlaku untuk elemen tersebut.'
      },
      {
        id: 'html-css-intro-4',
        question: 'Selector CSS mana yang memiliki prioritas tertinggi?',
        options: [
          'Element selector (p, div, h1)',
          'Class selector (.classname)',
          'ID selector (#idname)',
          'Inline style'
        ],
        correctAnswer: 3,
        explanation: 'Inline style memiliki prioritas tertinggi dalam CSS specificity, diikuti oleh ID selector, class selector, dan element selector.'
      },
      {
        id: 'html-css-intro-5',
        question: 'Tag HTML mana yang benar untuk menampilkan gambar?',
        options: [
          '<image src="foto.jpg">',
          '<img href="foto.jpg">',
          '<img src="foto.jpg" alt="Foto">',
          '<picture>foto.jpg</picture>'
        ],
        correctAnswer: 2,
        explanation: 'Tag <img> dengan atribut src untuk path gambar dan alt untuk teks alternatif adalah cara yang benar dan accessible untuk menampilkan gambar.'
      }
    ]
  },
  
  // Photography - Penemuan Photography
  {
    courseId: 'penemuan-photography',
    questions: [
      {
        id: 'penemuan-photo-1',
        question: 'Siapa yang dianggap sebagai penemu fotografi pertama kali dengan proses daguerreotype?',
        options: [
          'George Eastman',
          'Louis Daguerre',
          'William Henry Fox Talbot',
          'Nicéphore Niépce'
        ],
        correctAnswer: 1,
        explanation: 'Louis Daguerre mengembangkan proses daguerreotype pada tahun 1839, yang dianggap sebagai proses fotografi praktis pertama yang sukses secara komersial.'
      },
      {
        id: 'penemuan-photo-2',
        question: 'Apa nama foto pertama yang berhasil diambil oleh Nicéphore Niépce?',
        options: [
          'View from the Window at Le Gras',
          'The First Photograph',
          'Boulevard du Temple',
          'The Horse in Motion'
        ],
        correctAnswer: 0,
        explanation: '"View from the Window at Le Gras" adalah foto permanen pertama yang berhasil diambil oleh Niépce sekitar tahun 1826-1827, membutuhkan waktu eksposur sekitar 8 jam.'
      },
      {
        id: 'penemuan-photo-3',
        question: 'Apa kontribusi utama George Eastman terhadap perkembangan fotografi?',
        options: [
          'Menemukan proses daguerreotype',
          'Menciptakan kamera digital pertama',
          'Membuat fotografi lebih accessible dengan film roll dan kamera Kodak',
          'Menemukan proses cetak warna'
        ],
        correctAnswer: 2,
        explanation: 'George Eastman mendirikan Kodak dan memperkenalkan film roll serta kamera yang mudah digunakan dengan slogan "You press the button, we do the rest", membuat fotografi accessible untuk masyarakat umum.'
      },
      {
        id: 'penemuan-photo-4',
        question: 'Proses fotografi mana yang memungkinkan multiple copies dari satu negative?',
        options: [
          'Daguerreotype',
          'Ambrotype',
          'Calotype (Talbotype)',
          'Tintype'
        ],
        correctAnswer: 2,
        explanation: 'Calotype atau Talbotype yang dikembangkan oleh William Henry Fox Talbot menggunakan sistem negative-positive yang memungkinkan pembuatan multiple copies dari satu negative.'
      },
      {
        id: 'penemuan-photo-5',
        question: 'Apa yang membuat fotografi color menjadi lebih praktis pada abad ke-20?',
        options: [
          'Penemuan sensor digital',
          'Pengembangan film Kodachrome dan Agfacolor',
          'Penemuan filter polaroid',
          'Teknologi laser printing'
        ],
        correctAnswer: 1,
        explanation: 'Kodachrome (1935) dan Agfacolor membuat fotografi warna menjadi lebih praktis dan accessible untuk fotografer amateur dan professional.'
      }
    ]
  },

  // JavaScript Dasar
  {
    courseId: 'javascript-dasar',
    questions: [
      {
        id: 'js-dasar-1',
        question: 'Apa perbedaan antara let, const, dan var dalam JavaScript?',
        options: [
          'Tidak ada perbedaan, ketiganya sama',
          'let dan const adalah block-scoped, var adalah function-scoped',
          'var adalah modern syntax, let dan const adalah legacy',
          'const hanya untuk angka, let untuk string, var untuk boolean'
        ],
        correctAnswer: 1,
        explanation: 'let dan const adalah ES6 features dengan block scope, sedangkan var adalah function-scoped. const digunakan untuk nilai yang tidak berubah, let untuk nilai yang dapat berubah.'
      },
      {
        id: 'js-dasar-2',
        question: 'Apa output dari: console.log(typeof null)?',
        options: [
          '"null"',
          '"undefined"',
          '"object"',
          '"number"'
        ],
        correctAnswer: 2,
        explanation: 'typeof null menghasilkan "object" karena bug legacy di JavaScript yang dipertahankan untuk backward compatibility.'
      },
      {
        id: 'js-dasar-3',
        question: 'Method array mana yang tidak mengubah array original?',
        options: [
          'push()',
          'pop()',
          'map()',
          'splice()'
        ],
        correctAnswer: 2,
        explanation: 'map() mengembalikan array baru tanpa mengubah array original. push(), pop(), dan splice() adalah mutating methods yang mengubah array original.'
      },
      {
        id: 'js-dasar-4',
        question: 'Apa hasil dari: "5" + 3?',
        options: [
          '8',
          '"8"',
          '"53"',
          'Error'
        ],
        correctAnswer: 2,
        explanation: 'JavaScript melakukan type coercion dan mengkonversi angka 3 menjadi string, kemudian melakukan string concatenation menghasilkan "53".'
      },
      {
        id: 'js-dasar-5',
        question: 'Operator mana yang digunakan untuk strict equality check di JavaScript?',
        options: [
          '=',
          '==',
          '===',
          '===='
        ],
        correctAnswer: 2,
        explanation: '=== adalah strict equality operator yang membandingkan nilai dan tipe data tanpa type coercion, sedangkan == melakukan type coercion.'
      }
    ]
  }
];

export const getQuizByCourseId = (courseId: string): CourseQuiz | undefined => {
  return courseQuizzes.find(quiz => quiz.courseId === courseId);
};
