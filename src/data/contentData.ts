import { MisuseTopic, TestCase, QuizQuestion, EmergencyAction, GlossaryTerm } from '../types';

export const MISUSE_TOPICS: MisuseTopic[] = [
  {
    id: 'deepfake',
    title: 'Deepfake & Manipulasi Wajah Teman',
    subtitle: 'Mengubah foto atau video seseorang menjadi adegan palsu tanpa izin',
    category: 'Manipulasi Visual & Identitas',
    iconName: 'CameraOff',
    realWorldScenario: 'Foto teman sekelas dari Instagram diambil, lalu diedit pakai AI menjadi foto yang memalukan atau tidak senonoh, kemudian disebar di grup WhatsApp sekolah untuk lelucon jahat.',
    whyDangerous: 'Merusak nama baik korban secara psikologis, memicu cyberbullying parah, trauma mendalam, dan bisa terjerat pidana UU ITE.',
    howToPrevent: [
      'Jangan pernah mencoba filter Face Swap atau AI image generator untuk foto orang lain tanpa izin.',
      'Kunci akun media sosial menjadi privat dan jangan sembarangan menerima followers tak dikenal.',
      'Jika melihat temanmu dijadikan korban, jangan ikut menyebarkan atau menertawakan — segera laporkan!'
    ],
    alertLevel: 'Kritis',
    statsNote: 'Kasus deepfake non-konsensual meningkat drastis di kalangan pelajar di seluruh dunia.'
  },
  {
    id: 'voice-clone',
    title: 'Kloning Suara & Penipuan Telepon (Voice Scam)',
    subtitle: 'Meniru suara orang terdekat dengan sampel audio singkat untuk memeras uang',
    category: 'Penipuan Audio & Rekayasa Sosial',
    iconName: 'MicOff',
    realWorldScenario: 'Orang tua atau kakek-nenek menerima voice note darurat dengan suara persis seperti kamu, mengatakan kamu ditahan di kantor polisi atau sakit mendadak dan minta transfer 500 ribu sekarang juga.',
    whyDangerous: 'Keluarga yang panik bisa langsung kehilangan uang tabungan. Suara hasil AI saat ini hanya butuh sampel rekaman 3 detik untuk terdengar sangat mirip!',
    howToPrevent: [
      'Sepakati "Kata Sandi Rahasia Keluarga" (Safe Word) yang hanya diketahui oleh kamu dan orang tuamu.',
      'Jika menerima telepon mencurigakan yang meminta uang, tutup telepon lalu hubungi kembali nomor asli yang tersimpan di kontak.',
      'Hindari mengunggah rekaman suara jernih berdurasi panjang di platform publik yang terbuka.'
    ],
    alertLevel: 'Kritis',
    statsNote: 'Hanya butuh 3-5 detik sampel suara dari media sosial untuk membuat tiruan suara AI.'
  },
  {
    id: 'plagiarism',
    title: 'Ketergantungan Total & Malas Berpikir (AI Sloth)',
    subtitle: 'Menyalin jawaban mentah-mentah dari AI untuk tugas sekolah tanpa dipelajari',
    category: 'Integritas Akademik & Perkembangan Diri',
    iconName: 'BookX',
    realWorldScenario: 'Siswa kelas 8 disuruh membuat esai tentang Sejarah Proklamasi. Tanpa membaca buku, ia menyuruh AI menuliskan semuanya, lalu langsung copy-paste dan kumpulkan ke guru.',
    whyDangerous: 'Otak tidak dilatih menganalisis dan berpikir kritis. Saat ujian tertulis di kelas tanpa HP, siswa akan kebingungan. Selain itu, jawaban AI seringkali mengandung kesalahan data (halusinasi).',
    howToPrevent: [
      'Gunakan AI sebagai "teman diskusi" untuk mencari ide atau penjelasan yang sulit, bukan sebagai "joki pembuat tugas".',
      'Tulis kembali pemahamanmu dengan gaya bahasamu sendiri.',
      'Selalu cek fakta dan tahun kejadian ke buku paket resmi atau sumber terpercaya.'
    ],
    alertLevel: 'Tinggi',
    statsNote: '85% guru mengakui mereka bisa mengenali esai murni buatan AI dari gaya bahasa yang kaku dan tidak alami.'
  },
  {
    id: 'hoax-hallucination',
    title: 'Penyebaran Hoaks & Halusinasi Fakta AI',
    subtitle: 'Mempercayai dan membagikan informasi bohong yang dikarang oleh kecerdasan buatan',
    category: 'Disinformasi & Berita Palsu',
    iconName: 'AlertTriangle',
    realWorldScenario: 'Beredar foto viral "Salju turun di puncak Monas Jakarta" atau kabar buatan bot AI yang menyatakan sekolah akan diliburkan 2 minggu karena cuaca ekstrem.',
    whyDangerous: 'Menimbulkan kepanikan publik, menyesatkan orang banyak, dan merusak kredibilitas diri sendiri karena menyebarkan berita bohong.',
    howToPrevent: [
      'Ingat rumus sederhana: AI Generatif tidak paham kebenaran mutlak; AI hanya merangkai kata atau gambar yang tampak masuk akal.',
      'Cek berita ke akun resmi sekolah, website berita terverifikasi, atau portal Cek Fakta.',
      'Amati tanda visual keanehan gambar AI: jari tangan tidak wajar, tulisan di gambar yang berantakan, pencahayaan aneh.'
    ],
    alertLevel: 'Tinggi',
    statsNote: 'AI sering membuat kutipan buku atau nama tokoh fiktif yang terdengar sangat meyakinkan (dikenal sebagai Hallucination).'
  },
  {
    id: 'privacy-leak',
    title: 'Kebocoran Data Pribadi & Privasi Siswa',
    subtitle: 'Memasukkan data sensitif, alamat rumah, atau nomor telepon ke sistem AI publik',
    category: 'Keamanan Data Digital',
    iconName: 'ShieldAlert',
    realWorldScenario: 'Siswa meminta AI membuatkan biodata lengkap untuk tugas osis, lalu memasukkan NIK, tanggal lahir, alamat rumah lengkap, foto diri, dan nomor HP pribadi ke prompt AI gratisan di internet.',
    whyDangerous: 'Banyak platform AI menyimpan obrolan untuk melatih mesin mereka. Data tersebut berisiko bocor ke internet atau dimanfaatkan pihak ketiga yang jahat untuk doxxing dan kejahatan finansial.',
    howToPrevent: [
      'Jangan pernah mengetik nama lengkap, NIK, alamat rumah, atau kata sandi ke dalam kolom prompt AI apa pun.',
      'Gunakan nama samaran (contoh: "Siswa A, Kota X") saat meminta contoh dokumen ke AI.',
      'Cek pengaturan akun AI dan matikan fitur "Chat History Sharing" jika tersedia.'
    ],
    alertLevel: 'Sedang',
    statsNote: 'Data percakapan di aplikasi AI publik sering dijadikan bahan pelatihan algoritma berikutnya.'
  }
];

export const TEST_CASES: TestCase[] = [
  {
    id: 1,
    title: 'Pesan Suara WhatsApp dari "Ibu"',
    source: 'Aplikasi Chatting WhatsApp',
    scenarioText: '"Halo Nak, ini Ibu lagi di klinik pinjam HP teman Ibu. Dompet Ibu ketinggalan di rumah, tolong transfer 250 ribu sekarang juga ke rekening BCA 981273918 atas nama Slamet. Cepat ya Nak, darurat!"',
    visualSnippet: 'Pesan suara 0:14 detik dari nomor tidak dikenal (+62899xxxx) menggunakan foto profil ibu.',
    isAiGenerated: true,
    correctAnswer: 'ai',
    redFlags: [
      'Nomor telepon berbeda dengan nomor asli ibu yang ada di kontakmu.',
      'Menciptakan rasa panik dan mendesak ("sekarang juga, cepat, darurat").',
      'Meminta transfer ke rekening orang lain yang tidak dikenal.',
      'Intonasi suara cenderung datar tanpa desah napas atau emosi alami saat darurat.'
    ],
    explanation: 'Ini adalah modus penipuan "Voice Cloning". Penipu mengambil cuplikan suara Ibu dari video TikTok/IG reels, lalu memerintahkan AI membacakan teks penipuan.',
    safetyTip: 'Tindakan benar: Jangan panik. Telepon nomor HP Ibu yang tersimpan di kontakmu atau tanya "Kata sandi rahasia keluarga".'
  },
  {
    id: 2,
    title: 'Foto Viral: Hujan Salju Lebat di Lapangan Sekolah',
    source: 'Postingan Instagram & TikTok',
    scenarioText: 'Beredar postingan foto lapangan upacara sekolah tertutup salju tebal putih 30 cm dengan tulisan: "Geger! Cuaca ekstrem pertama kali salju turun di SMP kita siang ini!"',
    visualSnippet: 'Foto siswa berdiri di atas salju tebal dengan bayangan terputus, tulisan di papan sekolah terbaca acak seperti huruf aneh, dan jari tangan siswa berjumlah 6.',
    isAiGenerated: true,
    correctAnswer: 'ai',
    redFlags: [
      'Secara iklim tropis Indonesia, salju di dataran rendah sekolah mustahil terjadi.',
      'Cacat visual khas AI: jari tangan berjumlah 6 dan tampak menyatu aneh.',
      'Teks/tulisan pada latar belakang tampak seperti huruf coretan acak yang tidak bisa dieja.',
      'Arah bayangan matahari tidak konsisten dengan sudut cahaya pohon.'
    ],
    explanation: 'Foto ini 100% dibuat menggunakan AI Image Generator (seperti Midjourney atau Dall-E). Gambar AI sering gagal menggambar jari tangan manusia dan teks latin yang presisi.',
    safetyTip: 'Tindakan benar: Periksa cuaca di BMKG dan jangan disebarkan kembali ke grup chat kelas!'
  },
  {
    id: 3,
    title: 'Surat Edaran Libur Ujian dari Sekolah',
    source: 'Mading Sekolah & Grup WhatsApp Kelas',
    scenarioText: 'Surat berkop resmi SMP Negeri lengkap dengan logo sekolah, nomor surat resmi, stempel basah berwarna biru, ditandatangani langsung oleh Kepala Sekolah dengan nama dan NIP yang tepat.',
    visualSnippet: 'Dokumen PDF resmi dibagikan langsung oleh Wali Kelas Bapak Ahmad di grup kelas yang terverifikasi.',
    isAiGenerated: false,
    correctAnswer: 'asli',
    redFlags: [
      'Tidak ada keanehan visual atau teks fiktif.',
      'Dikirimkan oleh pihak berwenang resmi (Wali Kelas langsung).',
      'Kop surat, NIP kepala sekolah, dan nomor surat sesuai arsip sekolah.'
    ],
    explanation: 'Dokumen ini ASLI dan resmi dari pihak sekolah. Meskipun kita harus kritis terhadap AI, pengumuman dari jalur resmi guru dengan identitas terverifikasi adalah sah.',
    safetyTip: 'Tindakan benar: Selalu percaya saluran komunikasi primer sekolah daripada gosip tidak jelas.'
  },
  {
    id: 4,
    title: 'Esai Tugas IPA dengan Sumber Buku Aneh',
    source: 'Tugas Kelompok Teman Sekelas',
    scenarioText: 'Tugas esai temanmu berbunyi: "Menurut riset Prof. Haryono Wibowo (2024) dalam buku Teori Klorofil Kuantum edisi Gramedia Jakarta halaman 45, tanaman paku dapat menghasilkan listrik 220 volt jika disiram teh manis..."',
    visualSnippet: 'Bahasa sangat baku dan puitis, tapi nama buku dan profesor tersebut tidak ditemukan sama sekali di Google maupun perpustakaan.',
    isAiGenerated: true,
    correctAnswer: 'ai',
    redFlags: [
      'Klaim ilmiah yang tidak masuk akal (tanaman disiram teh menghasilkan 220V).',
      'Halusinasi referensi: Nama buku dan nama pengarang dikarang bebas oleh AI agar terkesan ilmiah.',
      'Gaya bahasa kaku tanpa ada analisis pribadi siswa.'
    ],
    explanation: 'Ini adalah fenomena "AI Hallucination". AI generatif sering mengarang nama ilmuwan, judul jurnal, dan halaman buku fiktif dengan sangat percaya diri!',
    safetyTip: 'Tindakan benar: Jangan pernah mengutip buku dari AI sebelum kamu memverifikasi bahwa bukunya memang benar-benar ada di perpustakaan atau internet terpercaya.'
  },
  {
    id: 5,
    title: 'Video Giveaway iPhone dari Akun "Artis Terkenal"',
    source: 'Video Reels Instagram',
    scenarioText: 'Video seorang YouTuber terkenal berbicara: "Halo adik-adik SMP se-Indonesia! Hari ini kakak bagi-bagi 100 iPhone 16 gratis. Cukup klik link di bio, lalu upload foto KTP orang tua dan selfie kalian."',
    visualSnippet: 'Gerakan bibir artis sedikit terlambat (out of sync) dengan suaranya, pinggiran wajah agak kabur saat kepala menoleh, dan akun yang mengunggah baru dibuat 3 hari lalu tanpa centang biru.',
    isAiGenerated: true,
    correctAnswer: 'ai',
    redFlags: [
      'Gerak bibir tidak sinkron dengan kata yang diucapkan.',
      'Pinggiran leher dan dagu terlihat berkedip atau meleleh saat bergerak.',
      'Meminta data pribadi sensitif (KTP dan selfie) dengan iming-iming hadiah gratis.',
      'Akun pengunggah palsu dan baru dibuat.'
    ],
    explanation: 'Ini adalah video manipulasi Deepfake yang memanfaatkan popularitas publik figur untuk mencuri data pribadi dan memeras pelajar.',
    safetyTip: 'Tindakan benar: Jangan pernah memberikan foto KTP orang tua atau mengklik link aneh demi iming-iming barang gratis!'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Jika kamu diminta membuat esai oleh Guru Bahasa Indonesia, apa cara penggunaan AI yang PALING ETIS dan aman?',
    options: [
      'Menyuruh AI menulis seluruh esai, lalu mengganti nama pembuat menjadi nama sendiri.',
      'Meminta AI memberikan ide kerangka tulisan (outline), lalu kamu menyusun kalimatnya sendiri dengan membaca sumber terpercaya.',
      'Menyalin jawaban AI dan mengubah kata-katanya sedikit menggunakan sinonim otomatis.',
      'Tidak perlu belajar lagi karena masa depan sudah serba otomatis dikerjakan AI.'
    ],
    correctIndex: 1,
    explanation: 'AI paling baik dimanfaatkan sebagai mitra curah pendapat (brainstorming) atau membuat kerangka ide. Kamu tetap harus meneliti, membaca sumber asli, dan menulis dengan pikiranmu sendiri.',
    tipForStudent: 'Guru lebih menghargai tulisan sederhana hasil pikiranmu sendiri daripada esai sempurna buatan mesin!'
  },
  {
    id: 2,
    question: 'Seorang teman mengunduh aplikasi AI untuk mengubah foto wajah teman lain menjadi meme lucu tanpa busana. Bagaimana sikapmu?',
    options: [
      'Ikut membagikan ke grup WhatsApp karena itu cuma bercandaan seru antar teman.',
      'Diam saja karena takut dimusuhi oleh teman yang membuat.',
      'Menegur teman tersebut, mengingatkan bahwa itu melanggar etika dan privasi, serta meminta menghapus foto tersebut.',
      'Menyimpan fotonya di galeri HP untuk koleksi pribadi.'
    ],
    correctIndex: 2,
    explanation: 'Mengubah foto seseorang tanpa izin menggunakan AI adalah bentuk pelecehan digital (digital harassment) dan penyalahgunaan deepfake yang dapat dipidana. Lelucon tidak boleh merugikan martabat orang lain.',
    tipForStudent: 'Ingat: "Kalau kamu tidak suka fotomu digituin, jangan pernah lakukan itu ke orang lain."'
  },
  {
    id: 3,
    question: 'Apa arti dari istilah "AI Hallucination" (Halusinasi AI) yang sering terjadi di kehidupan sehari-hari?',
    options: [
      'AI sedang rusak dan layarnya berkedip-kedip ungu.',
      'AI memberikan informasi salah atau fiktif yang terdengar sangat meyakinkan seolah-olah fakta nyata.',
      'AI bisa melihat masa depan dan meramal nasib seseorang.',
      'AI sedang offline karena kehabisan kuota internet.'
    ],
    correctIndex: 1,
    explanation: 'Halusinasi AI adalah kondisi ketika AI mengarang data, kutipan, tanggal, atau fakta sejarah bohong karena sistemnya hanya memprediksi susunan kata berikutnya, bukan memahami kebenaran fakta.',
    tipForStudent: 'Selalu verifikasi data penting (angka, tahun, definisi ilmiah) ke buku pelajaran atau portal resmi.'
  },
  {
    id: 4,
    question: 'Kamu menerima pesan suara WhatsApp dari nomor asing dengan suara persis ayahmu yang meminta transfer uang darurat. Apa langkah pertamamu?',
    options: [
      'Langsung pinjam HP teman dan transfer uang secepatnya karena kasihan.',
      'Sebarkan nomor tersebut ke media sosial untuk meminta bantuan orang banyak.',
      'Tutup telepon, lalu hubungi nomor telepon Ayah yang asli yang tersimpan di kontakmu untuk mengonfirmasi.',
      'Kirim foto kartu ATM dan kode OTP ke pengirim pesan.'
    ],
    correctIndex: 2,
    explanation: 'Dengan teknologi Voice Cloning, penipu bisa meniru suara siapapun hanya dari cuplikan video pendek. Jangan panik! Verifikasi langsung ke nomor kontak asli orang yang bersangkutan.',
    tipForStudent: 'Trik ampuh: tanyakan pertanyaan pribadi yang hanya diketahui keluargamu (misal nama hewan peliharaan di rumah).'
  },
  {
    id: 5,
    question: 'Data apa sajakah yang HARUS DIHINDARI untuk dimasukkan ke dalam kolom obrolan (prompt) AI gratisan?',
    options: [
      'Pertanyaan tentang rumus luas permukaan kerucut matematika.',
      'Nama lengkap, NIK, alamat rumah, nomor HP pribadi, dan foto wajah keluarga.',
      'Contoh kata baku dan tidak baku dalam bahasa Indonesia.',
      'Ide tema pentas seni musik untuk kelas 8.'
    ],
    correctIndex: 1,
    explanation: 'Platform AI publik dapat menyimpan dan memproses semua teks yang kamu masukkan untuk melatih model mereka. Data pribadi sensitif tidak boleh dibagikan sembarangan.',
    tipForStudent: 'Selalu anggap kolom prompt AI seperti mading sekolah yang bisa dibaca orang lain!'
  }
];

export const EMERGENCY_ACTIONS: EmergencyAction[] = [
  {
    id: 'deepfake-photo',
    situation: 'Foto Diriku / Temanku Dimanipulasi AI & Disebar di Medsos',
    immediateStep: 'Ambil screenshot bukti postingan dan akun pelaku SEBELUM terhapus. Jangan membalas dengan amarah di kolom komentar.',
    actionList: [
      'Ambil tangkapan layar (screenshot) link akun, nomor HP penyebar, dan bukti obrolan.',
      'Laporkan postingan tersebut ke platform (Instagram / TikTok / WhatsApp) dengan opsi "Harassment / Non-consensual imagery".',
      'Segera beri tahu orang tua dan Guru Bimbingan Konseling (BK) di sekolah agar mendapat pendampingan aman.',
      'Jika pelaku adalah teman sekolah, bicarakan bersama pihak sekolah secara tertutup dan bijaksana.'
    ],
    contactWhom: 'Guru BK / Wali Kelas, Orang Tua, dan Layanan Aduan Konten Kominfo (aduan.kominfo.go.id)',
    reportTemplate: 'Selamat pagi/siang Bapak/Ibu Guru BK. Saya [Nama Siswa] kelas 8 [Nama Kelas]. Saya ingin berkonsultasi mengenai adanya foto diri/teman saya yang disalahgunakan dan diedit dengan AI tanpa izin oleh pihak tidak bertanggung jawab. Saya memiliki bukti tangkapan layar dan memohon bantuan bimbingan Bapak/Ibu. Terima kasih.'
  },
  {
    id: 'voice-scam',
    situation: 'Keluarga Ditelepon Suara Mirip Aku / Kerabat Minta Uang',
    immediateStep: 'Jangan langsung transfer uang berapapun jumlahnya! Tutup panggilan tersebut segera.',
    actionList: [
      'Hubungi nomor telepon asli anggota keluarga tersebut via panggilan seluler biasa atau video call.',
      'Tanyakan pertanyaan penguji: "Apa makanan favorit nenek?" atau "Kapan terakhir kita jalan bareng?".',
      'Catat nomor telepon penipu dan nomor rekening bank yang diminta.',
      'Laporkan nomor penipu ke aplikasi Getcontact / Truecaller dan lapor.go.id.'
    ],
    contactWhom: 'Keluarga Inti, Bank Penerbit Rekening, dan Polisi Siber (patrolisiber.id)',
    reportTemplate: 'Perhatian keluarga: Ada pihak yang mencoba meniru suara saya menggunakan AI untuk meminta uang transfer. Nomor asli saya hanya yang ini. Jika ada panggilan darurat minta uang atas nama saya, mohon konfirmasi langsung ke nomor saya!'
  },
  {
    id: 'homework-doubt',
    situation: 'Ragu Apakah Esai Tugas yang Kubuat Boleh Menggunakan AI',
    immediateStep: 'Jangan sembunyikan! Bersikaplah jujur dan transparan kepada gurumu.',
    actionList: [
      'Tanyakan kepada guru mata pelajaran: "Bapak/Ibu, apakah tugas ini memperbolehkan kami memakai AI untuk mencari ide?".',
      'Jika diizinkan, buat catatan kaki: "Ide kerangka tugas didiskusikan dengan bantuan AI, analisis dan isi ditulis mandiri oleh [Nama Siswa]".',
      'Simpan riwayat referensi dari buku paket untuk membuktikan bahwa kamu memahami materinya.'
    ],
    contactWhom: 'Guru Mata Pelajaran / Wali Kelas',
    reportTemplate: 'Selamat siang Bapak/Ibu Guru [Nama Guru]. Untuk tugas [Nama Tugas], saya sempat berkonsultasi dengan AI untuk mencari gambaran ide kerangka penulisan, lalu saya susun dan verifikasi sendiri dengan buku paket halaman [XX]. Apakah cara pencantuman sumber seperti ini sudah sesuai ketentuan tugas? Terima kasih atas arahannya.'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Deepfake',
    phonetic: 'dip-feik',
    simpleDefinition: 'Teknologi AI yang bisa mengganti wajah, ekspresi, atau tubuh seseorang dalam video/foto sehingga tampak sangat meyakinkan seolah orang itu benar-benar melakukannya.',
    dailyAnalogy: 'Seperti "topeng digital ajaib" yang sangat halus, tapi jika dipakai tanpa izin bisa menjadi fitnah berbahaya.'
  },
  {
    term: 'Voice Cloning',
    phonetic: 'vois kloning',
    simpleDefinition: 'Kemampuan AI meniru timbre suara, nada bicara, dan gaya seseorang hanya dari sampel rekaman suara beberapa detik.',
    dailyAnalogy: 'Seperti burung beo canggih yang bisa menirukan suara ibumu saat meminta uang jajan, padahal ibumu sedang bekerja.'
  },
  {
    term: 'AI Hallucination',
    phonetic: 'ha-lu-si-na-si',
    simpleDefinition: 'Kondisi di mana model AI memberikan jawaban yang salah, fakta bohong, atau mengarang sumber buku yang sebenarnya tidak pernah ada, namun disajikan dengan sangat percaya diri.',
    dailyAnalogy: 'Seperti teman yang pura-pura tahu semua jawaban saat ditanya di depan kelas, padahal jawabannya cuma karangan asal.'
  },
  {
    term: 'Prompt',
    phonetic: 'promt',
    simpleDefinition: 'Teks instruksi atau pertanyaan yang kita ketikkan ke dalam AI untuk meminta AI menjawab, menggambar, atau menganalisis sesuatu.',
    dailyAnalogy: 'Seperti resep pesanan yang kamu berikan ke koki di restoran.'
  },
  {
    term: 'Integritas Akademik',
    phonetic: 'akademik',
    simpleDefinition: 'Kejujuran dan tanggung jawab seorang pelajar dalam mengerjakan tugas sekolah dengan kemampuan sendiri tanpa menyontek atau menipu.',
    dailyAnalogy: 'Seperti bermain sepak bola secara sportif tanpa curang memakai tangan saat wasit tidak melihat.'
  },
  {
    term: 'Bias Algoritma',
    phonetic: 'al-go-rit-ma',
    simpleDefinition: 'Kecenderungan sistem AI memberikan jawaban yang tidak adil atau memihak karena data yang dipelajari AI dari internet mengandung prasangka manusia.',
    dailyAnalogy: 'Seperti juri lomba yang hanya menyukai peserta dari kota asalnya sendiri.'
  }
];

export const PAHAM_PRINCIPLES = [
  {
    letter: 'P',
    word: 'Periksa Fakta',
    detail: 'Jangan langsung percaya 100% pada apa pun yang dijawab atau digambar oleh AI. Selalu verifikasi ke buku pelajaran resmi, guru, atau sumber terpercaya.',
    action: 'Cek minimal 2 sumber nyata sebelum memasukkan data AI ke tugasku.'
  },
  {
    letter: 'A',
    word: 'Akui Bantuan AI',
    detail: 'Jadilah siswa yang berani jujur. Jika kamu menggunakan AI untuk membantumu memikirkan ide kerangka tugas, cantumkan secara terbuka kepada gurumu.',
    action: 'Tuliskan catatan: "Dibantu eksplorasi ide dengan AI".'
  },
  {
    letter: 'H',
    word: 'Hargai Privasi & Wajah Orang',
    detail: 'Jangan pernah mengunggah foto wajah teman, suara keluarga, atau data pribadi ke aplikasi pengubah wajah AI tanpa izin tertulis mereka.',
    action: 'Jaga rahasia identitas diri dan teman sekelas di dunia maya.'
  },
  {
    letter: 'A',
    word: 'Asah Otak Sendiri',
    detail: 'AI hanyalah asisten pembantu, bukan pengganti otakmu. Otot berpikirmu harus tetap dilatih dengan membaca, menganalisis, dan menulis sendiri.',
    action: 'Gunakan AI untuk belajar lebih paham, bukan untuk berhenti berpikir.'
  },
  {
    letter: 'M',
    word: 'Musyawarahkan Jika Ragu',
    detail: 'Bila kamu menemukan foto mencurigakan, pesan darurat bersuara aneh, atau ragu dengan tugasmu, bicaralah dengan orang tua atau guru BK.',
    action: 'Jangan pendam sendiri masalah digital yang kamu hadapi.'
  }
];
