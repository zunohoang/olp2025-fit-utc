import Image from "next/image"
import { Award, Calendar, MapPin, Clock, Phone, ExternalLink, Users, Trophy, Star, Gift } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 text-white">
      {/* Header */}
      <header className="container mx-auto pt-8 pb-4 px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">KHOA CÔNG NGHỆ THÔNG TIN</h2>

          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Image src="/truong.png" alt="Logo" width={48} height={48} />
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Image src="/khoa.png" alt="Logo" width={48} height={48} />
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Image src="/w.png" alt="Logo" width={48} height={48} />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image src="/doan.png" alt="Logo" width={48} height={48} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="relative z-10 bg-purple-900/80 backdrop-blur-sm border border-purple-700 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">CHÍNH THỨC</h2>
              <div className="relative inline-block">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-purple-950 text-4xl md:text-6xl font-extrabold px-8 py-4 rounded-lg">
                  MỞ ĐƠN
                </div>
                <div className="absolute -right-4 -bottom-4 bg-white text-purple-950 text-2xl md:text-4xl font-bold px-6 py-2 rounded-lg">
                  ĐĂNG KÍ
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-yellow-300">
                🎉 CUỘC THI OLYMPIC TIN HỌC SINH VIÊN UTC NĂM 2025 - VÒNG THỨ NHẤT
              </h3>

              <p className="text-lg md:text-xl text-center">
                🎯 Đam mê - Bản lĩnh - Tỏa sáng cùng sân chơi lớn nhất của dân IT trường Đại học Giao thông Vận tải!
              </p>

              <div className="space-y-2">
                <p className="text-lg">🧠 Bạn đã từng thâu đêm debug?</p>
                <p className="text-lg">🚀 Bạn đã từng hồi hộp chờ một dòng code AC?</p>
                <p className="text-lg">💻 Bạn đã từng mơ ước đứng trên sân khấu, gọi tên mình giữa tràng vỗ tay?</p>
                <p className="text-lg font-bold">
                  👉 Thì cuộc thi Olympic Tin học Sinh viên UTC 2025 chính là nơi để bạn hiện thực hóa những điều ấy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 bottom-4 md:left-20 md:bottom-20 hidden md:block">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-50"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute right-4 bottom-4 md:right-20 md:bottom-20 hidden md:block">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-50"></div>
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 hidden md:block">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-30 animate-float-delayed"></div>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 hidden md:block">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float-reverse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-float-reverse-delayed"></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 hidden md:block">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 animate-float-delayed"></div>
          </div>
        </div>

        {/* Circuit-like lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -rotate-45"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 hidden md:block">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-float-delayed"></div>
          </div>
        </div>
        <div className="absolute -right-20 bottom-1/4 hidden md:block">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float-reverse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-30 animate-float-reverse-delayed"></div>
          </div>
        </div>

        <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-700 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              🚀 CUỘC THI OLP TIN HỌC SINH VIÊN NĂM 2025
            </h2>
          </div>

          <div className="space-y-4 text-lg">
            <p>
              ✨ Cuộc thi Olympic Tin học Sinh viên – lần thứ nhất, do Khoa Công nghệ Thông tin phối hợp cùng CLB Tin
              học SFIT- Trường Đại học Giao thông Vận tải tổ chức, là sân chơi học thuật chuyên sâu dành cho sinh viên
              yêu thích công nghệ, lập trình và thuật toán.
            </p>

            <p>
              🔥 Tiếp nối thành công vang dội của Cuộc thi Olympic Tin học năm 2024, năm nay cuộc thi trở lại mạnh mẽ
              hơn – quy mô hơn – thử thách hơn, hứa hẹn sẽ là một đấu trường bùng nổ trí tuệ cho cộng đồng sinh viên
              công nghệ UTC.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-2">🌟 Mục tiêu cuộc thi:</h3>
                <ul className="space-y-2 pl-4">
                  <li>
                    Tạo một sân chơi học thuật hấp dẫn, thách thức trí tuệ và đòi hỏi tư duy giải quyết vấn đề sắc bén.
                  </li>
                  <li>
                    Khuyến khích tinh thần tự học, sáng tạo, rèn luyện kỹ năng lập trình, làm việc nhóm và giao tiếp học
                    thuật.
                  </li>
                  <li>
                    Phát hiện, bồi dưỡng và kết nối các tài năng trẻ, chuẩn bị hành trang bước vào các sân chơi lớn.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-2">👨‍💻 Đối tượng tham gia:</h3>
                <ul className="space-y-2 pl-4">
                  <li>Tất cả sinh viên đại học hệ chính quy tại Trường Đại học Giao thông Vận tải.</li>
                  <li>
                    Đặc biệt khuyến khích sinh viên các khóa đầu (K64, K65…) hoặc những bạn chưa có nhiều kinh nghiệm thi
                    đấu tham gia để học hỏi và rèn luyện.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-yellow-300">🔥 Hãy sẵn sàng để bùng nổ!</h3>
              <p className="mt-2">
                Cuộc thi không chỉ là nơi để thử sức – mà còn là nơi để khẳng định bản thân, học hỏi, kết nối và phát
                triển cùng cộng đồng công nghệ trẻ UTC!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 hidden md:block">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-30 animate-float-delayed"></div>
          </div>
        </div>
        <div className="absolute -right-20 bottom-1/4 hidden md:block">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float-reverse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-float-reverse-delayed"></div>
          </div>
        </div>

        <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-700 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
              <Trophy className="h-8 w-8 text-yellow-400" />
              GIẢI THƯỞNG
            </h2>
            <p className="text-xl italic">PHẦN THƯỞNG CHO NHỮNG NGƯỜI DÁM CHINH PHỤC</p>
          </div>

          <p className="text-lg mb-6">
            Tổng giá trị giải thưởng lên đến <span className="font-bold text-yellow-300">50.000.000 VNĐ</span>, nhưng
            điều quý giá hơn chính là vinh quang, sự công nhận và trải nghiệm không thể nào quên.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
                <Award className="h-6 w-6" />
                GIẢI CÁ NHÂN:
              </h3>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">🥇</span>
                  <span>01 Giải Nhất – cho người nhanh nhất, bản lĩnh nhất và xuất sắc nhất</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">🥈</span>
                  <span>XX Giải Nhì – ghi nhận sự kiên định và tư duy sắc bén</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">🥉</span>
                  <span>XX Giải Ba – dành cho những chiến binh bền bỉ không bỏ cuộc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">🎗</span>
                  <span>XX Khuyến Khích – tôn vinh tinh thần học hỏi và vượt giới hạn</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
                <Star className="h-6 w-6" />
                GIẢI ĐẶC BIỆT:
              </h3>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">👩‍💻</span>
                  <span>Nữ sinh xuất sắc nhất – nơi bản lĩnh của "các chị em coder" được tỏa sáng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">👨‍👩‍👧‍👦</span>
                  <span>Giải Tập thể xuất sắc nhất – khi tinh thần đồng đội và sức mạnh đoàn kết lên ngôi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">🎗</span>
                  <span>Giải Giao lưu – cho những trái tim không ngại sẻ chia, kết nối đam mê</span>
                </li>
              </ul>

              <div className="mt-4 p-4 bg-purple-700/50 rounded-lg">
                <p className="flex items-start gap-2">
                  <Gift className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>
                    Ngoài ra mọi sinh viên tham gia đều nhận được giấy chứng nhận từ Ban tổ chức – một minh chứng cho
                    tinh thần học hỏi và trải nghiệm quý báu trong hành trình sinh viên!
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-red-900/30 border border-red-700/50 rounded-lg">
            <h4 className="font-bold text-red-300 mb-2">⛔ LƯU Ý:</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✔️</span>
                <span>Chỉ trao giải cho sinh viên chưa từng đạt giải OLP toàn quốc</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✔️</span>
                <span>Sinh viên phải đăng ký và có mặt tại phòng thi</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competition Info Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-1/3 hidden md:block">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30 animate-float-delayed"></div>
          </div>
        </div>
        <div className="absolute -left-20 bottom-1/3 hidden md:block">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-20 animate-float-reverse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-30 animate-float-reverse-delayed"></div>
          </div>
        </div>

        <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-700 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              📝 THÔNG TIN CUỘC THI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-bold">Đối tượng tham gia:</span> Toàn bộ sinh viên trường Đại học GTVT
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-bold">Thời gian thi chính thức:</span> 13h00 – 16h00 | Chủ nhật
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Trophy className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-bold">Trao giải & bế mạc:</span> 16h15 – 17h30 cùng ngày
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-bold">Địa điểm:</span> Tầng 3, Tòa A4 – Trường Đại học GTVT
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-bold">Thi thử tại:</span>{" "}
                  <a
                    href="http://laptrinhonline.club/contest/olp1test"
                    className="text-blue-300 underline hover:text-blue-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://laptrinhonline.club/contest/olp1test
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                <p>
                  <span className="font-bold">Thời gian đăng ký:</span> Tháng 5/2025
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-purple-950 text-xl font-bold px-8 py-3 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all">
              📥 ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-1/3 hidden md:block">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 animate-float-delayed"></div>
          </div>
        </div>
        <div className="absolute -left-20 bottom-1/3 hidden md:block">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-float-reverse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30 animate-float-reverse-delayed"></div>
          </div>
        </div>

        <div className="bg-purple-800/50 backdrop-blur-sm border border-purple-700 rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              MỌI THÔNG TIN CHI TIẾT LIÊN HỆ
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
              <p>
                <span className="font-bold">Chủ nhiệm CLB - Phó trưởng BTC:</span> Hoàng Mạnh Khiêm
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold">📄 Fanpage:</p>
              <ul className="space-y-2 pl-4">
                <li>
                  <a
                    href="https://www.facebook.com/KhoaCongNgheThongTinDaiHocGiaoThongVanTai"
                    className="text-blue-300 hover:text-blue-200 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Khoa Công nghệ thông tin</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/sfit2016"
                    className="text-blue-300 hover:text-blue-200 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Câu lạc bộ Tin học</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/FIT.UTC"
                    className="text-blue-300 hover:text-blue-200 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Liên chi Đoàn CNTT</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-8 text-center">
        <p className="text-purple-300">© 2025 Olympic Tin học Sinh viên UTC. All rights reserved.</p>
      </footer>

      {/* Circuit board decorative elements */}
      <div className="fixed bottom-0 left-0 w-full h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-purple-500"></div>
        <div className="absolute bottom-0 left-1/3 w-1/6 h-px bg-purple-500"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-purple-500"></div>

        <div className="absolute bottom-0 left-1/4 w-px h-8 bg-purple-500"></div>
        <div className="absolute bottom-0 left-1/2 w-px h-12 bg-purple-500"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-8 bg-purple-500"></div>

        <div className="absolute bottom-8 left-1/4 w-2 h-2 rounded-full bg-purple-400"></div>
        <div className="absolute bottom-12 left-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 rounded-full bg-purple-400"></div>
      </div>
    </div>
  )
}
