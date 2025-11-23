import { CourseQuiz } from '@/types/quiz';

export const courseQuizzes: CourseQuiz[] = [
  // ==================== CODING COURSES ====================
  
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

  // HTML Struktur
  {
    courseId: 'html-struktur',
    questions: [
      {
        id: 'html-struktur-1',
        question: 'Tag mana yang digunakan untuk mendefinisikan bagian header dalam HTML5?',
        options: [
          '<head>',
          '<header>',
          '<top>',
          '<section>'
        ],
        correctAnswer: 1,
        explanation: '<header> adalah semantic tag HTML5 untuk mendefinisikan header section dari halaman atau section, berbeda dengan <head> yang berisi metadata.'
      },
      {
        id: 'html-struktur-2',
        question: 'Apa fungsi dari tag <nav>?',
        options: [
          'Membuat navigasi bar dengan styling otomatis',
          'Menandai section yang berisi navigation links',
          'Membuat menu dropdown',
          'Menghubungkan ke halaman lain'
        ],
        correctAnswer: 1,
        explanation: '<nav> adalah semantic tag untuk menandai section yang berisi navigation links, membantu accessibility dan SEO.'
      },
      {
        id: 'html-struktur-3',
        question: 'Tag mana yang tepat untuk konten utama halaman?',
        options: [
          '<content>',
          '<body>',
          '<main>',
          '<article>'
        ],
        correctAnswer: 2,
        explanation: '<main> digunakan untuk menandai konten utama/dominan dari halaman, dan hanya boleh ada satu per halaman.'
      },
      {
        id: 'html-struktur-4',
        question: 'Apa perbedaan <section> dan <div>?',
        options: [
          'Tidak ada perbedaan',
          '<section> memiliki styling default, <div> tidak',
          '<section> adalah semantic tag dengan makna, <div> hanya container',
          '<section> hanya untuk sidebar'
        ],
        correctAnswer: 2,
        explanation: '<section> adalah semantic tag yang menandai section tematik dengan heading, sedangkan <div> adalah generic container tanpa semantic meaning.'
      },
      {
        id: 'html-struktur-5',
        question: 'Tag footer sebaiknya digunakan untuk?',
        options: [
          'Hanya di akhir halaman',
          'Di akhir halaman atau section/article',
          'Hanya untuk copyright information',
          'Tidak perlu digunakan'
        ],
        correctAnswer: 1,
        explanation: '<footer> dapat digunakan untuk footer dari halaman keseluruhan atau footer dari section/article tertentu.'
      }
    ]
  },

  // HTML Form
  {
    courseId: 'html-form',
    questions: [
      {
        id: 'html-form-1',
        question: 'Atribut mana yang menentukan kemana form data akan dikirim?',
        options: [
          'method',
          'action',
          'target',
          'submit'
        ],
        correctAnswer: 1,
        explanation: 'Atribut "action" menentukan URL kemana form data akan dikirim saat submit.'
      },
      {
        id: 'html-form-2',
        question: 'Type input mana yang tepat untuk email?',
        options: [
          'type="text"',
          'type="email"',
          'type="mail"',
          'type="e-mail"'
        ],
        correctAnswer: 1,
        explanation: 'type="email" memberikan validasi otomatis untuk format email dan keyboard yang sesuai di mobile.'
      },
      {
        id: 'html-form-3',
        question: 'Apa fungsi atribut "required" pada input?',
        options: [
          'Membuat input menjadi read-only',
          'Membuat input wajib diisi sebelum submit',
          'Membuat input auto-focus',
          'Membuat input lebih besar'
        ],
        correctAnswer: 1,
        explanation: 'Atribut "required" membuat field wajib diisi, browser akan mencegah submit jika field kosong.'
      },
      {
        id: 'html-form-4',
        question: 'Tag mana untuk membuat dropdown selection?',
        options: [
          '<dropdown>',
          '<list>',
          '<select>',
          '<option>'
        ],
        correctAnswer: 2,
        explanation: '<select> digunakan untuk membuat dropdown list, dengan <option> di dalamnya untuk setiap pilihan.'
      },
      {
        id: 'html-form-5',
        question: 'Apa perbedaan method GET dan POST?',
        options: [
          'GET untuk search, POST untuk login',
          'GET menampilkan data di URL, POST tidak',
          'POST lebih cepat dari GET',
          'Tidak ada perbedaan'
        ],
        correctAnswer: 1,
        explanation: 'GET mengirim data melalui URL (visible), cocok untuk search. POST mengirim data dalam request body (hidden), cocok untuk sensitive data.'
      }
    ]
  },

  // HTML Tabel
  {
    courseId: 'html-tabel',
    questions: [
      {
        id: 'html-tabel-1',
        question: 'Tag mana yang mendefinisikan table row?',
        options: [
          '<row>',
          '<tr>',
          '<td>',
          '<line>'
        ],
        correctAnswer: 1,
        explanation: '<tr> (table row) digunakan untuk mendefinisikan baris dalam tabel.'
      },
      {
        id: 'html-tabel-2',
        question: 'Apa perbedaan <th> dan <td>?',
        options: [
          '<th> untuk header cell, <td> untuk data cell',
          '<th> lebih besar dari <td>',
          'Tidak ada perbedaan',
          '<th> hanya di baris pertama'
        ],
        correctAnswer: 0,
        explanation: '<th> (table header) untuk header cells dengan styling bold dan center, <td> (table data) untuk data cells biasa.'
      },
      {
        id: 'html-tabel-3',
        question: 'Tag <thead>, <tbody>, <tfoot> digunakan untuk?',
        options: [
          'Styling yang berbeda',
          'Mengelompokkan bagian tabel secara semantic',
          'Membuat tabel responsive',
          'Tidak perlu digunakan'
        ],
        correctAnswer: 1,
        explanation: 'Tag tersebut mengelompokkan header, body, dan footer tabel secara semantic, membantu accessibility dan styling.'
      },
      {
        id: 'html-tabel-4',
        question: 'Atribut "colspan" digunakan untuk?',
        options: [
          'Membuat cell lebih lebar',
          'Menggabungkan beberapa kolom',
          'Mengatur warna column',
          'Membuat column sortable'
        ],
        correctAnswer: 1,
        explanation: 'colspan menggabungkan beberapa kolom, misalnya colspan="2" akan membuat cell mengisi 2 kolom.'
      },
      {
        id: 'html-tabel-5',
        question: 'Atribut "rowspan" berfungsi untuk?',
        options: [
          'Membuat baris lebih tinggi',
          'Menggabungkan beberapa baris',
          'Mengatur jarak antar baris',
          'Membuat baris berulang'
        ],
        correctAnswer: 1,
        explanation: 'rowspan menggabungkan beberapa baris vertikal, misalnya rowspan="3" akan membuat cell mengisi 3 baris.'
      }
    ]
  },

  // CSS Box Model
  {
    courseId: 'css-box-model',
    questions: [
      {
        id: 'css-box-1',
        question: 'Urutan layer dari luar ke dalam pada CSS Box Model adalah?',
        options: [
          'Margin, Border, Padding, Content',
          'Padding, Margin, Border, Content',
          'Border, Margin, Padding, Content',
          'Content, Padding, Border, Margin'
        ],
        correctAnswer: 0,
        explanation: 'CSS Box Model dari luar ke dalam: Margin (ruang luar), Border (garis tepi), Padding (ruang dalam), Content (konten).'
      },
      {
        id: 'css-box-2',
        question: 'Apa fungsi property "box-sizing: border-box"?',
        options: [
          'Membuat border lebih tebal',
          'Width/height include padding dan border',
          'Menghilangkan margin',
          'Membuat box menjadi kotak'
        ],
        correctAnswer: 1,
        explanation: 'box-sizing: border-box membuat width/height include padding dan border, memudahkan sizing calculation.'
      },
      {
        id: 'css-box-3',
        question: 'Margin: 10px 20px 30px 40px; artinya?',
        options: [
          'Top: 10px, Right: 20px, Bottom: 30px, Left: 40px',
          'All sides: 10px',
          'Top-Bottom: 10px, Left-Right: 20px',
          'Random values'
        ],
        correctAnswer: 0,
        explanation: 'Urutan clockwise: Top (10px), Right (20px), Bottom (30px), Left (40px) - ingat dengan "TRBL" atau arah jarum jam.'
      },
      {
        id: 'css-box-4',
        question: 'Apa yang terjadi dengan margin: auto pada block element?',
        options: [
          'Margin menjadi 0',
          'Element di-center horizontal',
          'Element di-center vertical',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'margin: auto (atau margin: 0 auto) pada block element dengan width tertentu akan center element secara horizontal.'
      },
      {
        id: 'css-box-5',
        question: 'Apa itu margin collapse?',
        options: [
          'Margin yang hilang',
          'Vertical margins bergabung menjadi satu',
          'Margin yang overlap',
          'Bug di CSS'
        ],
        correctAnswer: 1,
        explanation: 'Margin collapse terjadi ketika vertical margins (top/bottom) dari dua element berdekatan bergabung, mengambil nilai yang lebih besar.'
      }
    ]
  },

  // CSS Flexbox
  {
    courseId: 'css-flexbox',
    questions: [
      {
        id: 'css-flex-1',
        question: 'Property untuk membuat container menjadi flex container adalah?',
        options: [
          'display: flex',
          'flex-container: true',
          'layout: flex',
          'position: flex'
        ],
        correctAnswer: 0,
        explanation: 'display: flex mengubah element menjadi flex container, membuat children-nya menjadi flex items.'
      },
      {
        id: 'css-flex-2',
        question: 'justify-content mengatur alignment di axis mana?',
        options: [
          'Vertical axis',
          'Main axis (horizontal default)',
          'Cross axis',
          'Z-axis'
        ],
        correctAnswer: 1,
        explanation: 'justify-content mengatur alignment items di main axis (horizontal jika flex-direction: row, vertical jika column).'
      },
      {
        id: 'css-flex-3',
        question: 'align-items mengatur alignment di axis mana?',
        options: [
          'Main axis',
          'Cross axis (vertical default)',
          'Diagonal axis',
          'Tidak ada'
        ],
        correctAnswer: 1,
        explanation: 'align-items mengatur alignment items di cross axis, perpendicular dengan main axis.'
      },
      {
        id: 'css-flex-4',
        question: 'flex-direction: column akan membuat items tersusun?',
        options: [
          'Horizontal dari kiri ke kanan',
          'Vertical dari atas ke bawah',
          'Diagonal',
          'Random'
        ],
        correctAnswer: 1,
        explanation: 'flex-direction: column mengubah main axis menjadi vertical, items tersusun dari atas ke bawah.'
      },
      {
        id: 'css-flex-5',
        question: 'flex: 1 pada flex item artinya?',
        options: [
          'Width: 1px',
          'Item akan grow mengisi ruang kosong',
          'Item menjadi item pertama',
          'Item menjadi 1 column'
        ],
        correctAnswer: 1,
        explanation: 'flex: 1 adalah shorthand untuk flex-grow: 1, membuat item grow untuk mengisi available space dengan proporsi yang sama.'
      }
    ]
  },

  // CSS Design
  {
    courseId: 'css-design',
    questions: [
      {
        id: 'css-design-1',
        question: 'Color theory: Apa itu complementary colors?',
        options: [
          'Warna yang sama',
          'Warna yang berseberangan di color wheel',
          'Warna yang berdekatan',
          'Warna hitam putih'
        ],
        correctAnswer: 1,
        explanation: 'Complementary colors adalah warna yang berseberangan di color wheel (misal: merah-hijau, biru-orange), menciptakan contrast yang kuat.'
      },
      {
        id: 'css-design-2',
        question: 'Satuan rem dalam CSS relative terhadap?',
        options: [
          'Parent element font-size',
          'Root element (html) font-size',
          'Browser default font-size',
          'Window width'
        ],
        correctAnswer: 1,
        explanation: 'rem (root em) relative terhadap root element font-size, lebih predictable dan konsisten dibanding em.'
      },
      {
        id: 'css-design-3',
        question: 'Media query untuk screen dengan width minimum 768px adalah?',
        options: [
          '@media (width: 768px)',
          '@media (min-width: 768px)',
          '@media screen and (768px)',
          '@media (max-width: 768px)'
        ],
        correctAnswer: 1,
        explanation: '@media (min-width: 768px) berlaku untuk screen width 768px ke atas, digunakan untuk mobile-first responsive design.'
      },
      {
        id: 'css-design-4',
        question: 'Apa fungsi CSS Variable (Custom Properties)?',
        options: [
          'Membuat animasi',
          'Menyimpan dan reuse values',
          'Membuat grid layout',
          'Tidak ada fungsinya'
        ],
        correctAnswer: 1,
        explanation: 'CSS Variables (--variable-name) memungkinkan menyimpan values (colors, sizes, etc.) untuk digunakan ulang, mudah maintenance.'
      },
      {
        id: 'css-design-5',
        question: 'Transform: translate(50px, 100px) akan menggerakkan element?',
        options: [
          '50px ke kanan, 100px ke bawah',
          '100px ke kanan, 50px ke bawah',
          '50px ke kiri, 100px ke atas',
          'Tidak bergerak'
        ],
        correctAnswer: 0,
        explanation: 'translate(x, y) menggerakkan element: x ke kanan (positif) atau kiri (negatif), y ke bawah (positif) atau atas (negatif).'
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
  },

  // JavaScript Fungsi
  {
    courseId: 'javascript-fungsi',
    questions: [
      {
        id: 'js-fungsi-1',
        question: 'Apa perbedaan function declaration dan function expression?',
        options: [
          'Tidak ada perbedaan',
          'Declaration di-hoist, expression tidak',
          'Expression lebih cepat',
          'Declaration tidak bisa menerima parameter'
        ],
        correctAnswer: 1,
        explanation: 'Function declaration di-hoist (bisa dipanggil sebelum deklarasi), sedangkan function expression tidak di-hoist.'
      },
      {
        id: 'js-fungsi-2',
        question: 'Arrow function (() => {}) tidak memiliki?',
        options: [
          'Parameters',
          'Return value',
          'this binding sendiri',
          'Curly braces'
        ],
        correctAnswer: 2,
        explanation: 'Arrow function tidak memiliki this binding sendiri, this mengacu pada parent scope (lexical this).'
      },
      {
        id: 'js-fungsi-3',
        question: 'Apa itu callback function?',
        options: [
          'Function yang error',
          'Function yang dipassing sebagai argument',
          'Function yang memanggil dirinya sendiri',
          'Function yang return function'
        ],
        correctAnswer: 1,
        explanation: 'Callback adalah function yang di-pass sebagai argument ke function lain, untuk dijalankan kemudian.'
      },
      {
        id: 'js-fungsi-4',
        question: 'Default parameter dalam function digunakan ketika?',
        options: [
          'Parameter tidak di-provide atau undefined',
          'Parameter adalah null',
          'Parameter adalah false',
          'Selalu digunakan'
        ],
        correctAnswer: 0,
        explanation: 'Default parameter digunakan ketika argument tidak di-provide atau nilainya undefined.'
      },
      {
        id: 'js-fungsi-5',
        question: 'Apa output: (x => x * 2)(5)?',
        options: [
          '10',
          '5',
          '25',
          'Error'
        ],
        correctAnswer: 0,
        explanation: 'Arrow function (x => x * 2) langsung dipanggil dengan argument 5, menghasilkan 5 * 2 = 10. Ini disebut IIFE (Immediately Invoked Function Expression).'
      }
    ]
  },

  // JavaScript Logika
  {
    courseId: 'javascript-logika',
    questions: [
      {
        id: 'js-logika-1',
        question: 'Apa output dari: 0 || "default"?',
        options: [
          '0',
          'true',
          '"default"',
          'false'
        ],
        correctAnswer: 2,
        explanation: 'Operator || return value pertama yang truthy. 0 adalah falsy, jadi return "default". Sering digunakan untuk default values.'
      },
      {
        id: 'js-logika-2',
        question: 'Apa output dari: 5 && "hello"?',
        options: [
          '5',
          '"hello"',
          'true',
          'false'
        ],
        correctAnswer: 1,
        explanation: 'Operator && return value terakhir jika semua truthy, atau value pertama yang falsy. 5 truthy, jadi return "hello".'
      },
      {
        id: 'js-logika-3',
        question: 'Mana yang bukan falsy value di JavaScript?',
        options: [
          '0',
          '""',
          '[]',
          'null'
        ],
        correctAnswer: 2,
        explanation: 'Empty array [] adalah truthy. Falsy values: false, 0, "", null, undefined, NaN.'
      },
      {
        id: 'js-logika-4',
        question: 'Ternary operator: condition ? true : false, kapan "true" dijalankan?',
        options: [
          'Ketika condition adalah truthy',
          'Ketika condition adalah 1',
          'Selalu',
          'Tidak pernah'
        ],
        correctAnswer: 0,
        explanation: 'Ternary operator menjalankan expression pertama (true) jika condition truthy, expression kedua (false) jika falsy.'
      },
      {
        id: 'js-logika-5',
        question: 'Apa output dari: !!"false"?',
        options: [
          'true',
          'false',
          '"false"',
          'undefined'
        ],
        correctAnswer: 0,
        explanation: 'Double negation (!!) converts value to boolean. "false" adalah non-empty string (truthy), jadi !!"false" = true.'
      }
    ]
  },

  // JavaScript Looping
  {
    courseId: 'javascript-looping',
    questions: [
      {
        id: 'js-loop-1',
        question: 'Loop mana yang paling tepat untuk iterasi array?',
        options: [
          'for loop',
          'while loop',
          'forEach() atau for...of',
          'do...while'
        ],
        correctAnswer: 2,
        explanation: 'forEach() atau for...of adalah cara modern dan readable untuk iterasi array. for...of memberikan value langsung, forEach memberikan value dan index.'
      },
      {
        id: 'js-loop-2',
        question: 'Apa perbedaan for...in dan for...of?',
        options: [
          'Tidak ada perbedaan',
          'for...in untuk keys/indexes, for...of untuk values',
          'for...of lebih lambat',
          'for...in hanya untuk array'
        ],
        correctAnswer: 1,
        explanation: 'for...in iterate over keys/indexes (enumerable properties), for...of iterate over values dari iterable objects (array, string, etc.).'
      },
      {
        id: 'js-loop-3',
        question: 'Keyword untuk menghentikan loop sepenuhnya adalah?',
        options: [
          'stop',
          'exit',
          'break',
          'return'
        ],
        correctAnswer: 2,
        explanation: 'break menghentikan loop sepenuhnya. continue skip iteration saat ini dan lanjut ke next iteration.'
      },
      {
        id: 'js-loop-4',
        question: 'Kapan do...while loop minimal dijalankan?',
        options: [
          'Tidak pernah jika condition false',
          'Minimal 1 kali',
          'Minimal 2 kali',
          'Tergantung condition'
        ],
        correctAnswer: 1,
        explanation: 'do...while selalu dijalankan minimal 1 kali karena check condition dilakukan di akhir, berbeda dengan while yang check di awal.'
      },
      {
        id: 'js-loop-5',
        question: 'Method array mana yang return array baru?',
        options: [
          'forEach()',
          'map()',
          'Both',
          'None'
        ],
        correctAnswer: 1,
        explanation: 'map() return array baru dengan hasil transformation. forEach() hanya iterate tanpa return value (return undefined).'
      }
    ]
  },

  // JavaScript Event
  {
    courseId: 'javascript-event',
    questions: [
      {
        id: 'js-event-1',
        question: 'Cara yang benar untuk menambahkan event listener adalah?',
        options: [
          'element.onClick = function()',
          'element.addEventListener("click", function)',
          'element.addEvent("click")',
          'element.on("click")'
        ],
        correctAnswer: 1,
        explanation: 'addEventListener() adalah cara modern dan recommended untuk attach event handlers, mendukung multiple handlers pada satu event.'
      },
      {
        id: 'js-event-2',
        question: 'Apa fungsi event.preventDefault()?',
        options: [
          'Menghentikan event bubbling',
          'Menghapus event listener',
          'Mencegah default behavior browser',
          'Membuat event tidak aktif'
        ],
        correctAnswer: 2,
        explanation: 'preventDefault() mencegah default behavior browser, misal: prevent form submit, prevent link navigation.'
      },
      {
        id: 'js-event-3',
        question: 'Apa itu event bubbling?',
        options: [
          'Event yang hilang',
          'Event naik dari child ke parent elements',
          'Event yang berulang',
          'Event animation'
        ],
        correctAnswer: 1,
        explanation: 'Event bubbling adalah proses dimana event naik dari target element ke parent elements. Bisa dihentikan dengan stopPropagation().'
      },
      {
        id: 'js-event-4',
        question: 'Event delegation adalah teknik untuk?',
        options: [
          'Membuat event lebih cepat',
          'Attach single listener pada parent untuk handle child events',
          'Menghapus semua events',
          'Copy events'
        ],
        correctAnswer: 1,
        explanation: 'Event delegation: attach listener pada parent element, handle events dari children dengan event.target. Efficient untuk dynamic content.'
      },
      {
        id: 'js-event-5',
        question: 'event.target vs event.currentTarget, apa bedanya?',
        options: [
          'Tidak ada perbedaan',
          'target: element yang di-click, currentTarget: element dengan listener',
          'currentTarget lebih modern',
          'target untuk mouse, currentTarget untuk keyboard'
        ],
        correctAnswer: 1,
        explanation: 'event.target adalah element yang benar-benar di-trigger, event.currentTarget adalah element dimana listener attached (bisa parent).'
      }
    ]
  },

  // JavaScript DOM Manipulation
  {
    courseId: 'javascript-manipulation',
    questions: [
      {
        id: 'js-dom-1',
        question: 'Method untuk select single element by ID adalah?',
        options: [
          'document.getElementByID()',
          'document.getElementById()',
          'document.selectById()',
          'document.findById()'
        ],
        correctAnswer: 1,
        explanation: 'document.getElementById("id") return single element dengan ID tersebut. Case-sensitive!'
      },
      {
        id: 'js-dom-2',
        question: 'querySelector() vs querySelectorAll(), apa bedanya?',
        options: [
          'Tidak ada perbedaan',
          'querySelector return 1 element, querySelectorAll return NodeList',
          'querySelectorAll lebih cepat',
          'querySelector hanya untuk ID'
        ],
        correctAnswer: 1,
        explanation: 'querySelector() return element pertama yang match, querySelectorAll() return NodeList (array-like) dari semua matching elements.'
      },
      {
        id: 'js-dom-3',
        question: 'Cara mengubah text content dari element adalah?',
        options: [
          'element.text = "new"',
          'element.innerHTML = "new"',
          'element.textContent = "new"',
          'element.content = "new"'
        ],
        correctAnswer: 2,
        explanation: 'textContent mengubah text, lebih aman dari innerHTML. innerHTML parse HTML tags, textContent treat semuanya sebagai plain text.'
      },
      {
        id: 'js-dom-4',
        question: 'Method untuk create element baru adalah?',
        options: [
          'document.new("div")',
          'document.create("div")',
          'document.createElement("div")',
          'new Element("div")'
        ],
        correctAnswer: 2,
        explanation: 'document.createElement("tagName") create new element. Lalu gunakan appendChild() atau append() untuk add ke DOM.'
      },
      {
        id: 'js-dom-5',
        question: 'classList.toggle("class") akan?',
        options: [
          'Add class',
          'Remove class',
          'Add jika tidak ada, remove jika ada',
          'Replace class'
        ],
        correctAnswer: 2,
        explanation: 'classList.toggle() add class jika tidak ada, remove jika sudah ada. Berguna untuk show/hide, active state, etc.'
      }
    ]
  },

  // React.js Komponen
  {
    courseId: 'reactjs-komponen',
    questions: [
      {
        id: 'react-komp-1',
        question: 'Apa perbedaan functional dan class component?',
        options: [
          'Tidak ada perbedaan',
          'Functional component lebih modern, menggunakan hooks',
          'Class component lebih cepat',
          'Functional component tidak bisa have state'
        ],
        correctAnswer: 1,
        explanation: 'Functional components adalah modern approach dengan hooks (useState, useEffect). Class components adalah legacy dengan lifecycle methods.'
      },
      {
        id: 'react-komp-2',
        question: 'Props dalam React adalah?',
        options: [
          'Data yang bisa diubah dalam component',
          'Data yang di-pass dari parent ke child (read-only)',
          'State global',
          'Function'
        ],
        correctAnswer: 1,
        explanation: 'Props adalah data immutable yang di-pass dari parent component ke child component, seperti function parameters.'
      },
      {
        id: 'react-komp-3',
        question: 'JSX adalah?',
        options: [
          'JavaScript XML, syntax extension untuk write HTML-like code in JS',
          'CSS framework',
          'Build tool',
          'Testing library'
        ],
        correctAnswer: 0,
        explanation: 'JSX adalah syntax extension yang memungkinkan kita write HTML-like code dalam JavaScript, di-compile menjadi React.createElement() calls.'
      },
      {
        id: 'react-komp-4',
        question: 'Kenapa harus ada "key" prop pada list items?',
        options: [
          'Untuk styling',
          'Membantu React identify which items changed/added/removed',
          'Wajib untuk semua elements',
          'Tidak perlu'
        ],
        correctAnswer: 1,
        explanation: 'Key membantu React efficiently update DOM dengan identify which items berubah. Key harus unique dan stable.'
      },
      {
        id: 'react-komp-5',
        question: 'Component name harus dimulai dengan?',
        options: [
          'Huruf kecil',
          'Huruf besar (PascalCase)',
          'Underscore',
          'Angka'
        ],
        correctAnswer: 1,
        explanation: 'Component names harus PascalCase (dimulai huruf besar) agar React bisa distinguish dari HTML tags (lowercase).'
      }
    ]
  },

  // React.js Hooks
  {
    courseId: 'reactjs-hooks',
    questions: [
      {
        id: 'react-hooks-1',
        question: 'Kapan useEffect() dijalankan?',
        options: [
          'Sebelum render',
          'After render (by default after every render)',
          'Hanya sekali',
          'Tidak pernah'
        ],
        correctAnswer: 1,
        explanation: 'useEffect runs after render by default. Dengan dependency array, bisa control kapan re-run.'
      },
      {
        id: 'react-hooks-2',
        question: 'Apa fungsi dependency array pada useEffect?',
        options: [
          'Styling',
          'Control kapan effect re-run',
          'Pass data',
          'Tidak ada fungsi'
        ],
        correctAnswer: 1,
        explanation: 'Dependency array control kapan effect re-run: [] run once, [dep] re-run when dep changes, no array run every render.'
      },
      {
        id: 'react-hooks-3',
        question: 'useState() return apa?',
        options: [
          'Hanya state value',
          'Array [state, setState]',
          'Object {state, setState}',
          'Function'
        ],
        correctAnswer: 1,
        explanation: 'useState() return array dengan 2 elements: [currentState, setStateFunction]. Biasa di-destructure.'
      },
      {
        id: 'react-hooks-4',
        question: 'Kenapa tidak boleh call hooks secara conditional?',
        options: [
          'Performance issue',
          'React rely on hooks call order',
          'Syntax error',
          'Boleh saja'
        ],
        correctAnswer: 1,
        explanation: 'React rely on consistent hooks call order untuk track state. Hooks harus always called di top level, tidak dalam conditions/loops.'
      },
      {
        id: 'react-hooks-5',
        question: 'useCallback() digunakan untuk?',
        options: [
          'Memoize values',
          'Memoize functions',
          'Manage state',
          'Fetch data'
        ],
        correctAnswer: 1,
        explanation: 'useCallback() memoize functions, mencegah unnecessary re-creation. Berguna untuk optimize child components yang depend on function props.'
      }
    ]
  },

  // React.js Rendering
  {
    courseId: 'reactjs-rendering',
    questions: [
      {
        id: 'react-render-1',
        question: 'Kapan React component re-render?',
        options: [
          'Setiap detik',
          'When state or props change',
          'Saat page refresh',
          'Tidak pernah'
        ],
        correctAnswer: 1,
        explanation: 'Component re-render ketika state atau props berubah, atau ketika parent re-render (kecuali optimized dengan memo).'
      },
      {
        id: 'react-render-2',
        question: 'React.memo() digunakan untuk?',
        options: [
          'Memoize state',
          'Prevent re-render jika props sama',
          'Save to memory',
          'Delete component'
        ],
        correctAnswer: 1,
        explanation: 'React.memo() adalah HOC yang memoize component, prevent re-render jika props tidak berubah (shallow comparison).'
      },
      {
        id: 'react-render-3',
        question: 'Virtual DOM adalah?',
        options: [
          'Fake DOM',
          'Lightweight copy of real DOM di memory',
          'DOM API',
          'Browser feature'
        ],
        correctAnswer: 1,
        explanation: 'Virtual DOM adalah lightweight representation dari real DOM. React compare virtual DOM untuk optimize real DOM updates (reconciliation).'
      },
      {
        id: 'react-render-4',
        question: 'Apa itu reconciliation di React?',
        options: [
          'Error handling',
          'Process untuk compare dan update DOM efficiently',
          'Testing process',
          'Styling method'
        ],
        correctAnswer: 1,
        explanation: 'Reconciliation adalah process dimana React compare virtual DOM trees dan calculate minimal changes needed untuk update real DOM.'
      },
      {
        id: 'react-render-5',
        question: 'useMemo() memoize apa?',
        options: [
          'Functions',
          'Computed values',
          'Components',
          'Events'
        ],
        correctAnswer: 1,
        explanation: 'useMemo() memoize computed values, mencegah expensive calculations re-run jika dependencies tidak berubah.'
      }
    ]
  },

  // React.js State Management
  {
    courseId: 'reactjs-manajemen',
    questions: [
      {
        id: 'react-state-1',
        question: 'useContext() digunakan untuk?',
        options: [
          'Manage local state',
          'Share data across component tree tanpa prop drilling',
          'Fetch data',
          'Styling'
        ],
        correctAnswer: 1,
        explanation: 'useContext() consume context value, memungkinkan share data (state, functions) ke nested components tanpa passing props di setiap level.'
      },
      {
        id: 'react-state-2',
        question: 'useReducer() mirip dengan?',
        options: [
          'useState() tapi untuk complex state logic',
          'useEffect()',
          'useMemo()',
          'Tidak mirip apapun'
        ],
        correctAnswer: 0,
        explanation: 'useReducer() alternative untuk useState, lebih suitable untuk complex state logic dengan multiple sub-values atau related state updates.'
      },
      {
        id: 'react-state-3',
        question: 'Apa itu prop drilling?',
        options: [
          'Error type',
          'Passing props through multiple levels of components',
          'Performance issue',
          'Testing method'
        ],
        correctAnswer: 1,
        explanation: 'Prop drilling adalah passing props through many component levels. Context API atau state management libraries bisa solve ini.'
      },
      {
        id: 'react-state-4',
        question: 'Reducer function harus?',
        options: [
          'Async',
          'Pure function (no side effects)',
          'Return undefined',
          'Mutate state'
        ],
        correctAnswer: 1,
        explanation: 'Reducer must be pure function yang return new state based on current state dan action, tanpa side effects atau mutations.'
      },
      {
        id: 'react-state-5',
        question: 'Context Provider value berubah, apa yang terjadi?',
        options: [
          'Tidak ada',
          'Semua consumers re-render',
          'Only parent re-render',
          'Error'
        ],
        correctAnswer: 1,
        explanation: 'Ketika Context Provider value berubah, semua components yang consume context tersebut akan re-render.'
      }
    ]
  },

  // ==================== PHOTOGRAPHY COURSES ====================

  // Penemuan Photography
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

  // Photography 20th Century
  {
    courseId: 'photography-20th',
    questions: [
      {
        id: 'photo-20th-1',
        question: 'Gerakan fotografi mana yang fokus pada "photography as art"?',
        options: [
          'Pictorialism',
          'Documentarism',
          'Photojournalism',
          'Commercial photography'
        ],
        correctAnswer: 0,
        explanation: 'Pictorialism (akhir 1800s-awal 1900s) adalah movement yang menekankan fotografi sebagai fine art dengan soft focus dan artistic manipulation.'
      },
      {
        id: 'photo-20th-2',
        question: 'Henri Cartier-Bresson terkenal dengan konsep?',
        options: [
          'Golden hour',
          'Rule of thirds',
          'The decisive moment',
          'Leading lines'
        ],
        correctAnswer: 2,
        explanation: '"The Decisive Moment" adalah filosofi Cartier-Bresson tentang capturing the perfect instant ketika semua elements align dalam frame.'
      },
      {
        id: 'photo-20th-3',
        question: 'Ansel Adams terkenal dengan fotografi?',
        options: [
          'Portrait',
          'Street photography',
          'Landscape (terutama Yosemite)',
          'Fashion'
        ],
        correctAnswer: 2,
        explanation: 'Ansel Adams adalah master landscape photography, terkenal dengan black & white photos dari Yosemite dan American West, serta Zone System.'
      },
      {
        id: 'photo-20th-4',
        question: 'Kapan fotografi digital mulai mainstream?',
        options: [
          '1970s',
          '1980s',
          '1990s-2000s',
          '2010s'
        ],
        correctAnswer: 2,
        explanation: 'Fotografi digital mulai mainstream di late 1990s-early 2000s dengan affordable digital cameras dan improvement dalam sensor technology.'
      },
      {
        id: 'photo-20th-5',
        question: 'Dorothea Lange terkenal dengan?',
        options: [
          'Fashion photography',
          'Documentary photography (Great Depression)',
          'Wildlife photography',
          'Astronomical photography'
        ],
        correctAnswer: 1,
        explanation: 'Dorothea Lange terkenal dengan powerful documentary photos dari Great Depression era, termasuk iconic "Migrant Mother" photo.'
      }
    ]
  },

  // Jenis Camera
  {
    courseId: 'jenis-camera',
    questions: [
      {
        id: 'jenis-cam-1',
        question: 'Apa kepanjangan dari DSLR?',
        options: [
          'Digital Single Lens Reflex',
          'Digital Super Light Reflector',
          'Direct Sensor Light Receiver',
          'Digital Standard Lens Recorder'
        ],
        correctAnswer: 0,
        explanation: 'DSLR = Digital Single Lens Reflex, menggunakan mirror mechanism untuk reflect light ke optical viewfinder.'
      },
      {
        id: 'jenis-cam-2',
        question: 'Perbedaan utama mirrorless dan DSLR adalah?',
        options: [
          'Mirrorless tidak punya mirror box, lebih compact',
          'Mirrorless tidak bisa ganti lens',
          'DSLR lebih modern',
          'Tidak ada perbedaan'
        ],
        correctAnswer: 0,
        explanation: 'Mirrorless tidak memiliki mirror mechanism dan optical viewfinder, menggunakan electronic viewfinder, sehingga lebih compact dan ringan.'
      },
      {
        id: 'jenis-cam-3',
        question: 'Full-frame sensor vs Crop sensor, apa bedanya?',
        options: [
          'Full-frame lebih murah',
          'Full-frame sensor size sama dengan 35mm film (36x24mm)',
          'Crop sensor lebih baik untuk landscape',
          'Tidak ada perbedaan kualitas'
        ],
        correctAnswer: 1,
        explanation: 'Full-frame sensor size 36x24mm (sama dengan 35mm film), crop sensor lebih kecil (misal: APS-C 23.6x15.6mm), affecting field of view dan low-light performance.'
      },
      {
        id: 'jenis-cam-4',
        question: 'Point-and-shoot camera cocok untuk?',
        options: [
          'Professional photography',
          'Casual photography, travel, portability',
          'Studio photography',
          'Wildlife photography'
        ],
        correctAnswer: 1,
        explanation: 'Point-and-shoot (compact camera) cocok untuk casual photography dan travel karena portable, simple, dan automated settings.'
      },
      {
        id: 'jenis-cam-5',
        question: 'Medium format camera memiliki?',
        options: [
          'Sensor lebih kecil dari full-frame',
          'Sensor lebih besar dari full-frame (tinggi resolusi)',
          'Tidak bisa ganti lens',
          'Hanya untuk video'
        ],
        correctAnswer: 1,
        explanation: 'Medium format memiliki sensor lebih besar dari full-frame, menghasilkan resolusi sangat tinggi dan dynamic range superior, untuk professional/commercial use.'
      }
    ]
  },

  // Fungsi Camera
  {
    courseId: 'fungsi-camera',
    questions: [
      {
        id: 'fungsi-cam-1',
        question: 'Exposure triangle terdiri dari?',
        options: [
          'ISO, White Balance, Focus',
          'Aperture, Shutter Speed, ISO',
          'Zoom, Flash, Timer',
          'Resolution, Format, Compression'
        ],
        correctAnswer: 1,
        explanation: 'Exposure triangle adalah relationship antara Aperture (bukaan), Shutter Speed (kecepatan rana), dan ISO (sensitivity), yang menentukan exposure foto.'
      },
      {
        id: 'fungsi-cam-2',
        question: 'Viewfinder digunakan untuk?',
        options: [
          'Menyimpan foto',
          'Melihat dan compose frame sebelum mengambil foto',
          'Edit foto',
          'Transfer foto'
        ],
        correctAnswer: 1,
        explanation: 'Viewfinder (optical atau electronic) digunakan untuk preview dan compose scene sebelum taking the shot.'
      },
      {
        id: 'fungsi-cam-3',
        question: 'Apa fungsi dari mode Manual (M)?',
        options: [
          'Camera set everything automatically',
          'Photographer control aperture, shutter speed, dan ISO manually',
          'Hanya untuk video',
          'Auto focus only'
        ],
        correctAnswer: 1,
        explanation: 'Manual mode (M) memberikan full control kepada photographer untuk set aperture, shutter speed, dan ISO sesuai creative vision.'
      },
      {
        id: 'fungsi-cam-4',
        question: 'White balance mengatur?',
        options: [
          'Brightness',
          'Color temperature untuk accurate colors',
          'Contrast',
          'Sharpness'
        ],
        correctAnswer: 1,
        explanation: 'White balance mengatur color temperature untuk menghasilkan warna yang akurat di berbagai lighting conditions (daylight, tungsten, fluorescent, etc.).'
      },
      {
        id: 'fungsi-cam-5',
        question: 'Histogram pada camera menampilkan?',
        options: [
          'Battery level',
          'Distribution dari tones (shadows, midtones, highlights)',
          'Focus points',
          'Shooting mode'
        ],
        correctAnswer: 1,
        explanation: 'Histogram adalah graph yang menampilkan distribution dari tonal values dalam image, membantu identify over/under exposure.'
      }
    ]
  },

  // Jenis Lensa
  {
    courseId: 'jenis-lensa',
    questions: [
      {
        id: 'jenis-lens-1',
        question: 'Wide-angle lens (misal: 16-35mm) cocok untuk?',
        options: [
          'Portrait',
          'Wildlife',
          'Landscape dan architecture',
          'Macro'
        ],
        correctAnswer: 2,
        explanation: 'Wide-angle lens memiliki field of view lebar, cocok untuk landscape, architecture, dan interior photography untuk capture lebih banyak scene.'
      },
      {
        id: 'jenis-lens-2',
        question: 'Focal length berapa yang ideal untuk portrait?',
        options: [
          '16-35mm',
          '50-85mm',
          '200-400mm',
          '10mm'
        ],
        correctAnswer: 1,
        explanation: '50-85mm adalah ideal untuk portrait karena menghasilkan natural perspective dan flattering compression, dengan 85mm sebagai classic portrait lens.'
      },
      {
        id: 'jenis-lens-3',
        question: 'Telephoto lens (misal: 70-200mm) digunakan untuk?',
        options: [
          'Landscape only',
          'Sports, wildlife, distant subjects',
          'Architecture',
          'Macro'
        ],
        correctAnswer: 1,
        explanation: 'Telephoto lens memiliki focal length panjang untuk capture distant subjects, ideal untuk sports, wildlife, dan event photography.'
      },
      {
        id: 'jenis-lens-4',
        question: 'Macro lens digunakan untuk?',
        options: [
          'Landscape',
          'Portrait',
          'Close-up/extreme close-up photography',
          'Sports'
        ],
        correctAnswer: 2,
        explanation: 'Macro lens designed untuk close-up photography dengan magnification ratio 1:1 atau lebih, ideal untuk insects, flowers, products.'
      },
      {
        id: 'jenis-lens-5',
        question: 'Prime lens vs Zoom lens, apa bedanya?',
        options: [
          'Prime fixed focal length, Zoom variable focal length',
          'Prime untuk video, Zoom untuk foto',
          'Zoom lebih sharp',
          'Tidak ada perbedaan'
        ],
        correctAnswer: 0,
        explanation: 'Prime lens memiliki fixed focal length (misal: 50mm), generally sharper dan faster (wider aperture). Zoom lens variable focal length (misal: 24-70mm), lebih versatile.'
      }
    ]
  },

  // Focal Length
  {
    courseId: 'focal-length',
    questions: [
      {
        id: 'focal-1',
        question: 'Focal length diukur dalam satuan?',
        options: [
          'Pixels',
          'Millimeters (mm)',
          'Inches',
          'Megapixels'
        ],
        correctAnswer: 1,
        explanation: 'Focal length diukur dalam millimeters (mm), menunjukkan distance antara optical center lens dan sensor ketika focused at infinity.'
      },
      {
        id: 'focal-2',
        question: 'Focal length lebih besar (misal: 200mm) menghasilkan?',
        options: [
          'Field of view lebih lebar',
          'Field of view lebih sempit (telephoto effect)',
          'Exposure lebih terang',
          'Tidak berpengaruh'
        ],
        correctAnswer: 1,
        explanation: 'Focal length lebih besar menghasilkan field of view lebih sempit dan magnification lebih besar (telephoto), membuat distant objects appear closer.'
      },
      {
        id: 'focal-3',
        question: 'Focal length 50mm pada full-frame dianggap?',
        options: [
          'Wide-angle',
          'Normal/standard (mirip human vision)',
          'Telephoto',
          'Macro'
        ],
        correctAnswer: 1,
        explanation: '50mm pada full-frame sensor dianggap "normal" atau "standard" lens karena field of view mirip dengan human vision, menghasilkan natural perspective.'
      },
      {
        id: 'focal-4',
        question: 'Crop factor 1.5x pada APS-C sensor artinya?',
        options: [
          'Focal length berkurang 1.5x',
          'Effective focal length bertambah 1.5x (narrower FOV)',
          'Aperture berkurang',
          'Tidak ada efek'
        ],
        correctAnswer: 1,
        explanation: 'Crop factor 1.5x membuat effective focal length 1.5x lebih panjang. Misal: 50mm lens pada APS-C = 75mm equivalent field of view pada full-frame.'
      },
      {
        id: 'focal-5',
        question: 'Focal length mempengaruhi depth of field bagaimana?',
        options: [
          'Tidak mempengaruhi',
          'Longer focal length = shallower depth of field',
          'Shorter focal length = shallower depth of field',
          'Hanya aperture yang mempengaruhi'
        ],
        correctAnswer: 1,
        explanation: 'Longer focal length menghasilkan shallower depth of field (background blur), sedangkan shorter focal length depth of field lebih dalam.'
      }
    ]
  },

  // Digital Sensors
  {
    courseId: 'digital-sensors',
    questions: [
      {
        id: 'sensor-1',
        question: 'Apa fungsi image sensor dalam kamera digital?',
        options: [
          'Menyimpan foto',
          'Convert light menjadi electrical signals untuk create image',
          'Menampilkan foto',
          'Edit foto'
        ],
        correctAnswer: 1,
        explanation: 'Image sensor (CCD atau CMOS) convert incoming light menjadi electrical signals yang diproses menjadi digital image.'
      },
      {
        id: 'sensor-2',
        question: 'CMOS vs CCD sensor, mana yang lebih umum di modern cameras?',
        options: [
          'CCD',
          'CMOS (lebih efficient, faster)',
          'Sama saja',
          'Neither'
        ],
        correctAnswer: 1,
        explanation: 'CMOS (Complementary Metal-Oxide-Semiconductor) lebih common di modern cameras karena lebih power efficient, faster readout, dan cheaper to produce.'
      },
      {
        id: 'sensor-3',
        question: 'Larger sensor size menghasilkan?',
        options: [
          'Better low-light performance dan shallower DOF',
          'Worse image quality',
          'Smaller file size',
          'Tidak ada perbedaan'
        ],
        correctAnswer: 0,
        explanation: 'Larger sensor menghasilkan better low-light performance, wider dynamic range, shallower depth of field, dan generally better image quality.'
      },
      {
        id: 'sensor-4',
        question: 'Megapixel menunjukkan?',
        options: [
          'Sensor size',
          'Number of pixels (resolution)',
          'ISO range',
          'Shutter speed'
        ],
        correctAnswer: 1,
        explanation: 'Megapixel (MP) adalah number of pixels pada sensor (misal: 24MP = 24 million pixels), menentukan resolution dan maximum print size.'
      },
      {
        id: 'sensor-5',
        question: 'Bayer filter pada sensor digunakan untuk?',
        options: [
          'Protect sensor',
          'Capture color information (RGB)',
          'Increase resolution',
          'Reduce noise'
        ],
        correctAnswer: 1,
        explanation: 'Bayer filter adalah mosaic color filter array di depan sensor untuk capture color information (Red, Green, Blue) dari setiap pixel.'
      }
    ]
  },

  // ISO
  {
    courseId: 'iso',
    questions: [
      {
        id: 'iso-1',
        question: 'ISO mengontrol apa dalam fotografi?',
        options: [
          'Aperture size',
          'Shutter speed',
          'Sensor sensitivity to light',
          'Focal length'
        ],
        correctAnswer: 2,
        explanation: 'ISO mengontrol sensor sensitivity terhadap light. Higher ISO = more sensitive (brighter image), tapi lebih banyak noise.'
      },
      {
        id: 'iso-2',
        question: 'ISO 100 vs ISO 3200, mana yang menghasilkan lebih sedikit noise?',
        options: [
          'ISO 3200',
          'ISO 100 (lower ISO = less noise)',
          'Same',
          'Tergantung camera'
        ],
        correctAnswer: 1,
        explanation: 'Lower ISO (100-200) menghasilkan cleanest image dengan minimal noise. Higher ISO menghasilkan more noise/grain.'
      },
      {
        id: 'iso-3',
        question: 'Kapan sebaiknya menggunakan high ISO (1600+)?',
        options: [
          'Bright sunlight',
          'Low light situations (indoor, night)',
          'Landscape photography',
          'Never'
        ],
        correctAnswer: 1,
        explanation: 'High ISO digunakan di low light situations ketika tidak bisa use slower shutter speed (motion blur) atau wider aperture (sudah maximum).'
      },
      {
        id: 'iso-4',
        question: 'Native ISO adalah?',
        options: [
          'ISO setting paling rendah',
          'ISO range yang produce best quality tanpa amplification',
          'ISO otomatis',
          'ISO 100'
        ],
        correctAnswer: 1,
        explanation: 'Native ISO adalah sensor\'s true sensitivity range yang produce best quality. Extended ISO (diluar native range) use additional amplification.'
      },
      {
        id: 'iso-5',
        question: 'Auto ISO berfungsi untuk?',
        options: [
          'Set ISO otomatis untuk proper exposure',
          'Always use ISO 100',
          'Disable ISO',
          'Maximum ISO only'
        ],
        correctAnswer: 0,
        explanation: 'Auto ISO automatically adjust ISO untuk achieve proper exposure based on aperture dan shutter speed yang di-set, helpful di changing light conditions.'
      }
    ]
  },

  // Bentuk Photography
  {
    courseId: 'bentuk-photography',
    questions: [
      {
        id: 'bentuk-1',
        question: 'Portrait photography fokus pada?',
        options: [
          'Landscape',
          'Person/people dengan emphasis on face dan expression',
          'Architecture',
          'Food'
        ],
        correctAnswer: 1,
        explanation: 'Portrait photography capture person atau group dengan emphasis pada face, expression, personality, dan mood.'
      },
      {
        id: 'bentuk-2',
        question: 'Street photography biasanya?',
        options: [
          'Posed dan planned',
          'Candid moments di public spaces',
          'Studio photography',
          'Hanya di jalan raya'
        ],
        correctAnswer: 1,
        explanation: 'Street photography capture candid, unposed moments dari everyday life di public spaces, documenting human condition dan society.'
      },
      {
        id: 'bentuk-3',
        question: 'Macro photography fokus pada?',
        options: [
          'Distant landscapes',
          'Small subjects dengan extreme close-up',
          'Group photos',
          'Architecture'
        ],
        correctAnswer: 1,
        explanation: 'Macro photography capture small subjects (insects, flowers, textures) dengan extreme magnification, revealing details invisible to naked eye.'
      },
      {
        id: 'bentuk-4',
        question: 'Landscape photography biasanya menggunakan?',
        options: [
          'Telephoto lens dan shallow DOF',
          'Wide-angle lens dan deep DOF',
          'Macro lens',
          'Fast shutter speed'
        ],
        correctAnswer: 1,
        explanation: 'Landscape photography typically use wide-angle lens untuk capture expansive views, dan small aperture (f/11-f/16) untuk deep depth of field (everything in focus).'
      },
      {
        id: 'bentuk-5',
        question: 'Wildlife photography membutuhkan?',
        options: [
          'Wide-angle lens',
          'Telephoto lens (long focal length)',
          'Slow shutter speed',
          'Flash always'
        ],
        correctAnswer: 1,
        explanation: 'Wildlife photography membutuhkan telephoto lens (200mm+) untuk capture animals dari distance aman tanpa disturbing them, plus fast shutter untuk freeze motion.'
      }
    ]
  },

  // Sudut Gambar (Camera Angles)
  {
    courseId: 'sudut-gambar',
    questions: [
      {
        id: 'sudut-1',
        question: 'Eye-level angle adalah?',
        options: [
          'Camera positioned at subject\'s eye height',
          'Looking up',
          'Looking down',
          'Dutch angle'
        ],
        correctAnswer: 0,
        explanation: 'Eye-level angle adalah camera positioned at subject\'s eye level, creating natural dan neutral perspective, most common angle.'
      },
      {
        id: 'sudut-2',
        question: 'High angle (looking down) membuat subject tampak?',
        options: [
          'Powerful',
          'Smaller, vulnerable, atau submissive',
          'Larger',
          'Tidak ada efek'
        ],
        correctAnswer: 1,
        explanation: 'High angle (camera above subject, looking down) membuat subject appear smaller, weaker, atau vulnerable - sering untuk diminish importance.'
      },
      {
        id: 'sudut-3',
        question: 'Low angle (looking up) membuat subject tampak?',
        options: [
          'Weaker',
          'Powerful, dominant, imposing',
          'Smaller',
          'Normal'
        ],
        correctAnswer: 1,
        explanation: 'Low angle (camera below subject, looking up) membuat subject appear powerful, dominant, heroic - often used untuk emphasize strength atau importance.'
      },
      {
        id: 'sudut-4',
        question: 'Bird\'s eye view adalah?',
        options: [
          'Eye level',
          'Extreme high angle dari directly above',
          'Low angle',
          'Side angle'
        ],
        correctAnswer: 1,
        explanation: 'Bird\'s eye view adalah extreme high angle dari directly overhead, providing unique perspective dan showing spatial relationships.'
      },
      {
        id: 'sudut-5',
        question: 'Dutch angle (tilted horizon) digunakan untuk?',
        options: [
          'Normal portrait',
          'Create tension, disorientation, atau dynamism',
          'Landscape photography',
          'Technical error'
        ],
        correctAnswer: 1,
        explanation: 'Dutch angle (camera tilted, horizon diagonal) create visual tension, disorientation, atau energy - sering digunakan di dramatic atau action scenes.'
      }
    ]
  },

  // Teknik Photography
  {
    courseId: 'teknik',
    questions: [
      {
        id: 'teknik-1',
        question: 'Rule of thirds adalah?',
        options: [
          'Divide frame into 3 vertical sections',
          'Divide frame into 9 equal parts (3x3 grid)',
          'Use 3 colors',
          'Take 3 shots'
        ],
        correctAnswer: 1,
        explanation: 'Rule of thirds: divide frame into 9 equal parts dengan 2 horizontal dan 2 vertical lines. Place important elements along lines atau intersections untuk balanced composition.'
      },
      {
        id: 'teknik-2',
        question: 'Leading lines digunakan untuk?',
        options: [
          'Guide viewer\'s eye through the image',
          'Frame edges',
          'Lighting technique',
          'Focus stacking'
        ],
        correctAnswer: 0,
        explanation: 'Leading lines adalah lines (roads, rivers, fences, etc.) yang guide viewer\'s eye toward main subject atau through the scene, creating depth dan direction.'
      },
      {
        id: 'teknik-3',
        question: 'Panning technique digunakan untuk?',
        options: [
          'Static subjects',
          'Moving subjects (motion blur background, sharp subject)',
          'Landscape',
          'Macro'
        ],
        correctAnswer: 1,
        explanation: 'Panning: follow moving subject dengan camera sambil using slower shutter speed, menghasilkan sharp subject dengan blurred background untuk sense of motion.'
      },
      {
        id: 'teknik-4',
        question: 'Bokeh adalah?',
        options: [
          'Sharp focus',
          'Aesthetic quality of out-of-focus blur',
          'Lens distortion',
          'Camera shake'
        ],
        correctAnswer: 1,
        explanation: 'Bokeh adalah aesthetic quality dari out-of-focus areas (background blur), created dengan wide aperture (f/1.4-f/2.8) dan influenced by lens design.'
      },
      {
        id: 'teknik-5',
        question: 'Long exposure photography digunakan untuk?',
        options: [
          'Freeze fast motion',
          'Capture motion blur, light trails, smooth water',
          'Bright sunlight',
          'Sports'
        ],
        correctAnswer: 1,
        explanation: 'Long exposure (slower shutter speeds, seconds to minutes) capture motion over time: smooth water, light trails, star trails, cloud movement. Require tripod.'
      }
    ]
  },

  // Sumber Cahaya
  {
    courseId: 'sumber-cahaya',
    questions: [
      {
        id: 'cahaya-1',
        question: 'Natural light sources dalam fotografi adalah?',
        options: [
          'Flash dan studio lights',
          'Sun, moon, fire',
          'LED panels',
          'Reflectors'
        ],
        correctAnswer: 1,
        explanation: 'Natural light sources include sun (primary), moon, stars, fire - available light yang tidak di-create artificially.'
      },
      {
        id: 'cahaya-2',
        question: 'Hard light vs Soft light, apa bedanya?',
        options: [
          'Tidak ada perbedaan',
          'Hard light = harsh shadows, Soft light = diffused, gentle shadows',
          'Hard light lebih terang',
          'Soft light hanya di studio'
        ],
        correctAnswer: 1,
        explanation: 'Hard light (small, direct source) creates harsh, defined shadows dengan high contrast. Soft light (large, diffused source) creates gentle, gradual shadows dengan low contrast.'
      },
      {
        id: 'cahaya-3',
        question: 'Diffuser digunakan untuk?',
        options: [
          'Increase light intensity',
          'Soften harsh light',
          'Change color temperature',
          'Focus light'
        ],
        correctAnswer: 1,
        explanation: 'Diffuser (softbox, umbrella, scrim) spread dan soften light, making it less harsh dengan more flattering shadows.'
      },
      {
        id: 'cahaya-4',
        question: 'Backlighting adalah?',
        options: [
          'Light from front',
          'Light from behind subject',
          'Light from side',
          'No light'
        ],
        correctAnswer: 1,
        explanation: 'Backlighting: main light source behind subject, creating silhouette atau rim light effect, dramatic dan challenging to expose correctly.'
      },
      {
        id: 'cahaya-5',
        question: 'Three-point lighting setup terdiri dari?',
        options: [
          '3 flash units',
          'Key light, Fill light, Back/Rim light',
          '3 reflectors',
          '3 colors'
        ],
        correctAnswer: 1,
        explanation: 'Three-point lighting: Key light (main), Fill light (soften shadows), Back/Rim light (separation from background) - classic portrait/video lighting setup.'
      }
    ]
  },

  // Golden Hour
  {
    courseId: 'golden-hour',
    questions: [
      {
        id: 'golden-1',
        question: 'Golden hour adalah periode?',
        options: [
          'Midnight',
          'Shortly after sunrise atau before sunset',
          'Noon',
          'Anytime dengan sun'
        ],
        correctAnswer: 1,
        explanation: 'Golden hour adalah period shortly after sunrise atau before sunset ketika sunlight warm (golden), soft, dan directional - ideal untuk photography.'
      },
      {
        id: 'golden-2',
        question: 'Kenapa golden hour bagus untuk fotografi?',
        options: [
          'Brightest light',
          'Warm color temperature, soft light, flattering',
          'Coolest color',
          'No shadows'
        ],
        correctAnswer: 1,
        explanation: 'Golden hour produces warm, golden tones, soft diffused light, long shadows yang flattering, dan lower contrast - ideal untuk portraits dan landscapes.'
      },
      {
        id: 'golden-3',
        question: 'Blue hour terjadi?',
        options: [
          'Noon',
          'Before sunrise atau after sunset (twilight)',
          'Midnight',
          'Random'
        ],
        correctAnswer: 1,
        explanation: 'Blue hour adalah twilight period before sunrise atau after sunset ketika sky deep blue, indirect sunlight, long exposure opportunities.'
      },
      {
        id: 'golden-4',
        question: 'Harsh midday sun (noon) biasanya?',
        options: [
          'Ideal untuk semua photography',
          'Challenging (hard shadows, high contrast)',
          'Tidak bisa fotografi',
          'Sama dengan golden hour'
        ],
        correctAnswer: 1,
        explanation: 'Midday sun overhead creates harsh, unflattering shadows (especially untuk portraits), high contrast, squinting - challenging lighting conditions.'
      },
      {
        id: 'golden-5',
        question: 'Duration of golden hour tergantung pada?',
        options: [
          'Camera settings',
          'Latitude dan season (shorter near equator, longer at poles)',
          'Lens focal length',
          'Always 1 hour'
        ],
        correctAnswer: 1,
        explanation: 'Golden hour duration varies by latitude dan season: shorter near equator (20-30 mins), longer at higher latitudes, affected by weather dan terrain.'
      }
    ]
  },

  // Flash Photography
  {
    courseId: 'flash',
    questions: [
      {
        id: 'flash-1',
        question: 'On-camera flash (built-in) sering menghasilkan?',
        options: [
          'Perfect lighting',
          'Flat, harsh light dengan red-eye',
          'Soft, diffused light',
          'No effect'
        ],
        correctAnswer: 1,
        explanation: 'Built-in flash positioned close to lens, creates flat, harsh, direct light dengan hard shadows dan red-eye effect - not ideal untuk most situations.'
      },
      {
        id: 'flash-2',
        question: 'Bounce flash technique adalah?',
        options: [
          'Point flash directly at subject',
          'Bounce flash off ceiling/wall untuk soft, diffused light',
          'Use multiple flashes',
          'Disable flash'
        ],
        correctAnswer: 1,
        explanation: 'Bounce flash: aim flash head at ceiling/wall instead of subject, creating larger, softer light source dengan more natural, flattering results.'
      },
      {
        id: 'flash-3',
        question: 'Fill flash digunakan untuk?',
        options: [
          'Completely replace ambient light',
          'Fill in shadows di bright conditions (misal: harsh sunlight)',
          'Night photography only',
          'Disable ambient light'
        ],
        correctAnswer: 1,
        explanation: 'Fill flash adds light untuk fill in harsh shadows di bright conditions (misal: backlit subjects atau midday sun), balancing exposure.'
      },
      {
        id: 'flash-4',
        question: 'Flash sync speed adalah?',
        options: [
          'ISO setting',
          'Fastest shutter speed yang bisa sync dengan flash',
          'Flash power',
          'Flash recycle time'
        ],
        correctAnswer: 1,
        explanation: 'Flash sync speed adalah fastest shutter speed camera bisa use dengan flash (typically 1/200s-1/250s). Faster speeds cause black bars (partial exposure).'
      },
      {
        id: 'flash-5',
        question: 'Off-camera flash advantage adalah?',
        options: [
          'Cheaper',
          'More creative control over light direction dan quality',
          'No setup required',
          'Auto mode only'
        ],
        correctAnswer: 1,
        explanation: 'Off-camera flash (wireless atau wired) provides creative control untuk position light at different angles, create depth, shadows, dan more natural lighting.'
      }
    ]
  },

  // Histogram
  {
    courseId: 'histogram',
    questions: [
      {
        id: 'histogram-1',
        question: 'Histogram menampilkan?',
        options: [
          'Color temperature',
          'Distribution of tones dari shadows (left) ke highlights (right)',
          'Focus points',
          'Lens information'
        ],
        correctAnswer: 1,
        explanation: 'Histogram adalah graph showing tonal distribution: left side = shadows/blacks, middle = midtones, right side = highlights/whites.'
      },
      {
        id: 'histogram-2',
        question: 'Histogram "clipped" di right side artinya?',
        options: [
          'Perfect exposure',
          'Overexposed (blown highlights, lost detail)',
          'Underexposed',
          'Correct white balance'
        ],
        correctAnswer: 1,
        explanation: 'Histogram clipped/bunched at right edge indicates overexposure - blown highlights dengan lost detail yang tidak bisa recovered di post-processing.'
      },
      {
        id: 'histogram-3',
        question: 'Histogram bunched di left side menunjukkan?',
        options: [
          'Overexposed',
          'Underexposed (blocked shadows, lost detail)',
          'Perfect exposure',
          'High contrast'
        ],
        correctAnswer: 1,
        explanation: 'Histogram bunched at left edge indicates underexposure - blocked/crushed shadows dengan lost shadow detail.'
      },
      {
        id: 'histogram-4',
        question: '"Perfect" histogram untuk semua images adalah?',
        options: [
          'Bell curve di center',
          'Tidak ada - tergantung scene dan creative intent',
          'Flat line',
          'Always avoid clipping'
        ],
        correctAnswer: 1,
        explanation: 'Tidak ada "perfect" histogram - depends on scene. High-key (bright) images shifted right, low-key (dark) shifted left. Evaluate based on creative intent.'
      },
      {
        id: 'histogram-5',
        question: 'RGB histogram menampilkan?',
        options: [
          'Overall luminance only',
          'Separate graphs untuk Red, Green, Blue channels',
          'Color temperature',
          'White balance'
        ],
        correctAnswer: 1,
        explanation: 'RGB histogram shows separate distribution untuk each color channel (Red, Green, Blue), helpful untuk identify color clipping atau color cast.'
      }
    ]
  },

  // Photogenic
  {
    courseId: 'photogenic',
    questions: [
      {
        id: 'photogenic-1',
        question: 'Photogenic berarti?',
        options: [
          'Good photographer',
          'Looks attractive atau natural in photographs',
          'Expensive camera',
          'Photo editing skill'
        ],
        correctAnswer: 1,
        explanation: 'Photogenic describes subject (person, place, thing) yang looks particularly attractive, natural, atau appealing in photographs.'
      },
      {
        id: 'photogenic-2',
        question: 'Untuk portrait yang lebih photogenic, lighting sebaiknya?',
        options: [
          'Harsh direct light',
          'Soft, diffused light dari flattering angle',
          'Backlight only',
          'No light'
        ],
        correctAnswer: 1,
        explanation: 'Soft, diffused light (misal: window light, golden hour, softbox) dari flattering angle (typically 45° dari subject) creates most photogenic portraits.'
      },
      {
        id: 'photogenic-3',
        question: 'Posing tips untuk photogenic portraits include?',
        options: [
          'Look directly at camera always',
          'Natural relaxed posture, slight angle, genuine expression',
          'Stiff formal pose',
          'Random poses'
        ],
        correctAnswer: 1,
        explanation: 'Natural, relaxed poses dengan slight body angle (not straight-on), genuine expressions, dan comfortable positioning create more photogenic results.'
      },
      {
        id: 'photogenic-4',
        question: 'Wardrobe choice untuk photogenic photos sebaiknya?',
        options: [
          'Busy patterns dan bright neon',
          'Solid colors atau simple patterns yang complement skin tone',
          'Always white',
          'Doesn\'t matter'
        ],
        correctAnswer: 1,
        explanation: 'Solid colors atau simple patterns yang complement skin tone dan don\'t distract from subject create more photogenic results. Avoid busy patterns, logos.'
      },
      {
        id: 'photogenic-5',
        question: 'Camera angle untuk photogenic portraits biasanya?',
        options: [
          'Extreme low angle',
          'Slightly above eye level (flattering for most)',
          'Extreme high angle',
          'Random angles'
        ],
        correctAnswer: 1,
        explanation: 'Slightly above eye level adalah generally most flattering angle, slimming jawline dan avoiding unflattering nostril view, though ideal angle varies by face shape.'
      }
    ]
  },

  // Basic Editing
  {
    courseId: 'basic-editing',
    questions: [
      {
        id: 'edit-basic-1',
        question: 'Exposure adjustment di editing mengubah?',
        options: [
          'Color saturation',
          'Overall brightness of image',
          'Sharpness',
          'White balance'
        ],
        correctAnswer: 1,
        explanation: 'Exposure slider adjusts overall brightness/darkness dari entire image, simulating longer atau shorter exposure time.'
      },
      {
        id: 'edit-basic-2',
        question: 'Contrast adjustment mempengaruhi?',
        options: [
          'Only shadows',
          'Difference between lights and darks',
          'Color temperature',
          'Sharpness'
        ],
        correctAnswer: 1,
        explanation: 'Contrast controls difference antara light dan dark tones: higher contrast = more dramatic, lower contrast = flatter, softer image.'
      },
      {
        id: 'edit-basic-3',
        question: 'Highlights slider digunakan untuk?',
        options: [
          'Adjust brightest parts of image',
          'Adjust darkest parts',
          'Adjust colors',
          'Crop image'
        ],
        correctAnswer: 0,
        explanation: 'Highlights slider specifically adjusts brightest areas dari image, useful untuk recover blown highlights atau add drama to bright areas.'
      },
      {
        id: 'edit-basic-4',
        question: 'Saturation vs Vibrance, apa bedanya?',
        options: [
          'Same thing',
          'Saturation affects all colors equally, Vibrance protects skin tones',
          'Vibrance lebih strong',
          'No difference'
        ],
        correctAnswer: 1,
        explanation: 'Saturation uniformly boosts all colors (dapat over-saturate skin tones). Vibrance intelligently boosts muted colors while protecting skin tones dan preventing clipping.'
      },
      {
        id: 'edit-basic-5',
        question: 'Sharpening sebaiknya dilakukan?',
        options: [
          'First step',
          'Last step in editing workflow',
          'Multiple times',
          'Never'
        ],
        correctAnswer: 1,
        explanation: 'Sharpening sebaiknya final step karena should be applied after all other edits dan at correct amount untuk intended output size (screen, print).'
      }
    ]
  },

  // Color Theory
  {
    courseId: 'color-theory',
    questions: [
      {
        id: 'color-1',
        question: 'Primary colors (additive RGB model) adalah?',
        options: [
          'Red, Yellow, Blue',
          'Red, Green, Blue',
          'Cyan, Magenta, Yellow',
          'Orange, Purple, Green'
        ],
        correctAnswer: 1,
        explanation: 'Additive color model (light): primary colors Red, Green, Blue. Combining all creates white. Used in digital displays.'
      },
      {
        id: 'color-2',
        question: 'Complementary colors adalah?',
        options: [
          'Colors yang sama',
          'Colors opposite on color wheel (high contrast)',
          'Colors berdekatan',
          'Black and white'
        ],
        correctAnswer: 1,
        explanation: 'Complementary colors positioned opposite pada color wheel (Red-Cyan, Blue-Orange, Green-Magenta), creating maximum contrast dan visual impact.'
      },
      {
        id: 'color-3',
        question: 'Analogous color scheme menggunakan?',
        options: [
          'Opposite colors',
          'Colors yang berdekatan on color wheel',
          'Only primary colors',
          'Black and white'
        ],
        correctAnswer: 1,
        explanation: 'Analogous colors positioned next to each other pada color wheel (misal: blue, blue-green, green), creating harmonious, pleasing combinations.'
      },
      {
        id: 'color-4',
        question: 'Warm colors (red, orange, yellow) biasanya evoke?',
        options: [
          'Calm, sadness',
          'Energy, warmth, passion',
          'Coldness',
          'Neutral feelings'
        ],
        correctAnswer: 1,
        explanation: 'Warm colors (red, orange, yellow) psychologically associated dengan energy, warmth, excitement, passion - advance visually (appear closer).'
      },
      {
        id: 'color-5',
        question: 'Color grading dalam photography adalah?',
        options: [
          'Color correction only',
          'Creative process untuk achieve specific mood/aesthetic dengan colors',
          'Removing colors',
          'Camera setting'
        ],
        correctAnswer: 1,
        explanation: 'Color grading adalah creative process manipulating colors untuk achieve specific mood, aesthetic, atau visual style - berbeda dari color correction (technical accuracy).'
      }
    ]
  },

  // Contrast
  {
    courseId: 'contrast',
    questions: [
      {
        id: 'contrast-1',
        question: 'Tonal contrast refers to?',
        options: [
          'Color differences',
          'Difference between light and dark values',
          'Sharpness',
          'Texture'
        ],
        correctAnswer: 1,
        explanation: 'Tonal contrast adalah difference antara light dan dark values dalam image - range dari pure black ke pure white.'
      },
      {
        id: 'contrast-2',
        question: 'High contrast image memiliki?',
        options: [
          'Mostly gray tones',
          'Strong difference between lights and darks',
          'Soft gradients',
          'Muted colors'
        ],
        correctAnswer: 1,
        explanation: 'High contrast images have strong, dramatic difference antara highlights dan shadows, creating bold, graphic look dengan intense visual impact.'
      },
      {
        id: 'contrast-3',
        question: 'Low contrast image characterized by?',
        options: [
          'Strong blacks and whites',
          'Narrow range of similar tones (soft, flat)',
          'Bright colors',
          'Sharp edges'
        ],
        correctAnswer: 1,
        explanation: 'Low contrast images have narrow tonal range dengan mostly similar midtones, creating soft, subtle, ethereal, atau moody appearance.'
      },
      {
        id: 'contrast-4',
        question: 'Color contrast dapat dicreate dengan?',
        options: [
          'Using same color',
          'Complementary colors atau different hues/saturations',
          'Grayscale only',
          'No colors'
        ],
        correctAnswer: 1,
        explanation: 'Color contrast created menggunakan complementary colors, different hues, saturation levels, atau warm vs cool colors untuk visual interest.'
      },
      {
        id: 'contrast-5',
        question: 'Clarity slider (local contrast) affects?',
        options: [
          'Overall brightness',
          'Midtone contrast/texture detail',
          'Color saturation',
          'White balance'
        ],
        correctAnswer: 1,
        explanation: 'Clarity adjusts midtone contrast, enhancing texture dan edge definition tanpa affecting overall contrast - adds "punch" dan dimension.'
      }
    ]
  },

  // Editing Tools
  {
    courseId: 'editing-tools',
    questions: [
      {
        id: 'tools-1',
        question: 'Adobe Lightroom primarily used for?',
        options: [
          'Heavy manipulation',
          'Photo organization, RAW processing, non-destructive editing',
          'Graphic design',
          'Video editing'
        ],
        correctAnswer: 1,
        explanation: 'Lightroom adalah photo management dan editing tool untuk organize, RAW processing, dan non-destructive adjustments - ideal untuk workflow efficiency.'
      },
      {
        id: 'tools-2',
        question: 'Adobe Photoshop best for?',
        options: [
          'Basic adjustments only',
          'Advanced manipulation, compositing, retouching',
          'Photo organization',
          'Video editing'
        ],
        correctAnswer: 1,
        explanation: 'Photoshop adalah pixel-based editor untuk advanced manipulation, compositing, detailed retouching, creative effects - more complex than Lightroom.'
      },
      {
        id: 'tools-3',
        question: 'RAW file format advantage adalah?',
        options: [
          'Smaller file size',
          'Maximum data/flexibility untuk editing',
          'Faster processing',
          'Direct to social media'
        ],
        correctAnswer: 1,
        explanation: 'RAW files contain unprocessed sensor data dengan maximum information, providing greater flexibility untuk exposure, white balance, dan color adjustments.'
      },
      {
        id: 'tools-4',
        question: 'Layers in Photoshop digunakan untuk?',
        options: [
          'Delete photos',
          'Non-destructive editing dengan separate elements',
          'Reduce file size',
          'Auto correction'
        ],
        correctAnswer: 1,
        explanation: 'Layers allow non-destructive editing dengan stacking separate elements, adjustments, effects - can modify atau delete tanpa affecting original.'
      },
      {
        id: 'tools-5',
        question: 'Masks digunakan untuk?',
        options: [
          'Delete permanently',
          'Selectively apply adjustments to specific areas',
          'Add watermark',
          'Change file format'
        ],
        correctAnswer: 1,
        explanation: 'Masks allow selective application dari adjustments atau effects ke specific areas, non-destructively controlling where edits appear (black hides, white reveals).'
      }
    ]
  },

  // Workflow
  {
    courseId: 'workflow',
    questions: [
      {
        id: 'workflow-1',
        question: 'Photo editing workflow biasanya dimulai dengan?',
        options: [
          'Sharpening',
          'Import dan culling/selecting best images',
          'Export',
          'Creative effects'
        ],
        correctAnswer: 1,
        explanation: 'Workflow starts dengan import photos, culling (selecting keepers, rejecting bad shots), organizing - before any editing begins.'
      },
      {
        id: 'workflow-2',
        question: 'Global adjustments sebaiknya dilakukan?',
        options: [
          'After local adjustments',
          'Before local adjustments (exposure, white balance, contrast)',
          'Never',
          'Last step'
        ],
        correctAnswer: 1,
        explanation: 'Global adjustments (exposure, white balance, contrast, overall color) sebaiknya first, establishing baseline before local/selective adjustments.'
      },
      {
        id: 'workflow-3',
        question: 'Culling adalah process untuk?',
        options: [
          'Color correction',
          'Selecting best images dan rejecting bad ones',
          'Adding effects',
          'Printing'
        ],
        correctAnswer: 1,
        explanation: 'Culling adalah selection process: review all images, keep best shots, reject out-of-focus/bad exposure/duplicates - narrows down untuk editing.'
      },
      {
        id: 'workflow-4',
        question: 'Batch processing digunakan untuk?',
        options: [
          'Edit satu foto',
          'Apply same settings/actions to multiple images',
          'Delete files',
          'Change camera settings'
        ],
        correctAnswer: 1,
        explanation: 'Batch processing applies same settings, presets, atau actions ke multiple images sekaligus - saves time untuk consistent series atau events.'
      },
      {
        id: 'workflow-5',
        question: 'Export settings sebaiknya ditentukan berdasarkan?',
        options: [
          'Random choice',
          'Intended use (web, print, social media)',
          'Always maximum quality',
          'File name'
        ],
        correctAnswer: 1,
        explanation: 'Export settings (resolution, format, compression) depends on intended use: web (sRGB, smaller size), print (large, high res), social media (specific dimensions).'
      }
    ]
  },

  // AI Editing
  {
    courseId: 'ai-editing',
    questions: [
      {
        id: 'ai-edit-1',
        question: 'AI-powered editing tools dapat?',
        options: [
          'Replace photographers',
          'Automate repetitive tasks dan enhance certain processes',
          'Always produce perfect results',
          'Make photography obsolete'
        ],
        correctAnswer: 1,
        explanation: 'AI tools automate repetitive tasks (sky replacement, subject selection, noise reduction), enhance workflow efficiency - complement, not replace photographer\'s vision.'
      },
      {
        id: 'ai-edit-2',
        question: 'AI subject selection works by?',
        options: [
          'Manual clicking',
          'Machine learning to recognize dan select specific subjects',
          'Random selection',
          'Color only'
        ],
        correctAnswer: 1,
        explanation: 'AI subject selection uses machine learning trained on millions of images untuk automatically recognize dan select people, sky, objects - saves masking time.'
      },
      {
        id: 'ai-edit-3',
        question: 'AI denoise tools digunakan untuk?',
        options: [
          'Add noise',
          'Remove noise while preserving detail',
          'Blur image',
          'Change colors'
        ],
        correctAnswer: 1,
        explanation: 'AI denoise analyzes image patterns untuk intelligently remove noise (especially high ISO noise) while preserving important details dan texture.'
      },
      {
        id: 'ai-edit-4',
        question: 'Content-aware fill (AI) dapat?',
        options: [
          'Delete photos',
          'Intelligently remove objects dan fill gaps',
          'Add new objects',
          'Change camera settings'
        ],
        correctAnswer: 1,
        explanation: 'Content-aware fill uses AI untuk analyze surrounding areas dan intelligently fill removed objects/areas dengan appropriate content - powerful retouching tool.'
      },
      {
        id: 'ai-edit-5',
        question: 'Limitations of AI editing include?',
        options: [
          'No limitations',
          'Can make mistakes, lacks creative judgment, requires human oversight',
          'Too expensive',
          'Only works on portraits'
        ],
        correctAnswer: 1,
        explanation: 'AI tools can make errors (especially complex scenes), lack creative judgment/artistic intent, dan require human oversight untuk best results - assistant, not replacement.'
      }
    ]
  },

  // AI vs Human Photography
  {
    courseId: 'ai-vs-human',
    questions: [
      {
        id: 'ai-human-1',
        question: 'AI-generated images dibuat dengan?',
        options: [
          'Camera',
          'Text prompts atau training data (no camera)',
          'Lens',
          'Film'
        ],
        correctAnswer: 1,
        explanation: 'AI-generated images created dari text prompts atau training data using machine learning models - no camera, no physical capture, purely computational.'
      },
      {
        id: 'ai-human-2',
        question: 'Human photography advantage over AI adalah?',
        options: [
          'Speed',
          'Authentic capture of real moments, human emotion, creativity',
          'Perfect images always',
          'Lower cost'
        ],
        correctAnswer: 1,
        explanation: 'Human photography captures authentic real-world moments, genuine human emotion, unique creative vision, dan tells true stories - AI generates but doesn\'t capture reality.'
      },
      {
        id: 'ai-human-3',
        question: 'Ethical considerations dengan AI images include?',
        options: [
          'No ethical issues',
          'Disclosure, copyright, misinformation, artist rights',
          'Only technical issues',
          'Always unethical'
        ],
        correctAnswer: 1,
        explanation: 'AI images raise ethical questions: disclosure (labeling AI-generated), copyright (training data), potential misinformation, impact on working artists.'
      },
      {
        id: 'ai-human-4',
        question: 'Can AI completely replace professional photographers?',
        options: [
          'Yes, immediately',
          'No - lacks human creativity, emotion, real-world capture',
          'Already replaced',
          'In 1 year'
        ],
        correctAnswer: 1,
        explanation: 'AI cannot replace photographers\' unique vision, ability to capture authentic moments, adapt to real-world conditions, human connection dengan subjects, dan creative intent.'
      },
      {
        id: 'ai-human-5',
        question: 'Best use of AI dalam photography context adalah?',
        options: [
          'Replace all photography',
          'Tool untuk enhance workflow, not replace creative vision',
          'Generate all images',
          'Eliminate photographers'
        ],
        correctAnswer: 1,
        explanation: 'AI best used as tool untuk enhance photographer\'s workflow (editing automation, organization) - complements human creativity, not replaces authentic capture.'
      }
    ]
  },

  // Storytelling
  {
    courseId: 'storytelling',
    questions: [
      {
        id: 'story-1',
        question: 'Visual storytelling dalam fotografi adalah?',
        options: [
          'Adding text to photos',
          'Using images to convey narrative, emotion, atau message',
          'Taking many photos',
          'Using video instead'
        ],
        correctAnswer: 1,
        explanation: 'Visual storytelling uses images (single atau series) untuk convey narrative, evoke emotion, communicate message - telling story tanpa words.'
      },
      {
        id: 'story-2',
        question: 'Photo essay terdiri dari?',
        options: [
          'Single image',
          'Series of images yang tell cohesive story',
          'Text only',
          'Video'
        ],
        correctAnswer: 1,
        explanation: 'Photo essay adalah series dari related images yang together tell complete, cohesive story about subject, event, atau theme.'
      },
      {
        id: 'story-3',
        question: 'Untuk strong storytelling, photos sebaiknya?',
        options: [
          'Random shots',
          'Have clear subject, emotion, context, perspective',
          'Always portraits',
          'All landscapes'
        ],
        correctAnswer: 1,
        explanation: 'Strong storytelling photos have clear subject, evoke emotion, provide context, show perspective - each image contributes to narrative.'
      },
      {
        id: 'story-4',
        question: 'Documentary photography focuses on?',
        options: [
          'Staged scenes',
          'Truthful, unmanipulated recording of reality',
          'Fantasy',
          'Abstract concepts'
        ],
        correctAnswer: 1,
        explanation: 'Documentary photography records reality truthfully tanpa manipulation atau staging - telling real stories tentang people, places, events.'
      },
      {
        id: 'story-5',
        question: 'Emotional impact dalam storytelling photos dapat dicapai dengan?',
        options: [
          'Technical perfection only',
          'Capturing genuine moments, expressions, human connection',
          'Expensive equipment',
          'Heavy editing'
        ],
        correctAnswer: 1,
        explanation: 'Emotional impact comes dari capturing genuine human moments, authentic expressions, connection dengan subjects - technical skill supports, emotion drives story.'
      }
    ]
  }
];

export const getQuizByCourseId = (courseId: string): CourseQuiz | undefined => {
  return courseQuizzes.find(quiz => quiz.courseId === courseId);
};
