const quizBank4 = [
    {
        id: 1,
        question: 'Mô tả nào sau đây là mô tả thích hợp liên quan tới xác định phạm vi trong quản lý dự án?',
        answers: [
            'A. Để làm sáng tỏ các sản phẩm chuyển giao như sản phẩm cần được giao cho khách hàng và các tài liệu cần được chuẩn bị, cũng như các hoạt động cần được thực hiện', 
            'B. Để tạo một lịch biểu dự án dựa trên thời gian được yêu cầu cho từng hoạt động và trình tự thời gian của các hoạt động', 
            'C. Để làm sáng tỏ những người quan tâm dự án, kể cả đội ngũ nội bộ và các thành viên bên ngoài từ khách hàng các công ty đối tác', 
            'D. Để thiết lập chính sách chất lượng cho dự án và đạt được sự chấp thuận từ quản lý cấp cao'],
        correct: 'A. Để làm sáng tỏ các sản phẩm chuyển giao như sản phẩm cần được giao cho khách hàng và các tài liệu cần được chuẩn bị, cũng như các hoạt động cần được thực hiện'
    }, 
    {
        id: 2,
        question: 'Vấn đề nào sau đây không thuộc phạm vi quản lý của dự án?',
        answers: [
            'A. Kế hoạch của dự án', 
            'B. Đảm bảo chất lượng dự án', 
            'C. Chuẩn bị bắt đầu dự án', 
            'D. Không có phương án nào không thuộc'],
        correct: 'D. Không có phương án nào không thuộc'
    }, 
    {
        id: 3,
        question: 'Nhóm các thành phần nào sau đây tham gia vào quá trình xây dựng WBS?',
        answers: [
            'A. Tổ dự án, người tài trợ dự án, người sử dụng, quản lý dự án', 
            'B. Người quản lý dự án, khách hàng, thành viên tổ dự án, người tài trợ dự án', 
            'C. Quản lý dự án, lãnh đạo cao cấp của công ty, người tài trợ dự án, khách hàng', 
            'D. Các chuyên gia dự án, quản lý dự án, người sử dụng, người tài trợ dự án'],
        correct: 'B. Người quản lý dự án, khách hàng, thành viên tổ dự án, người tài trợ dự án'
    }, 
    {
        id: 4,
        question: 'Đâu là nguồn thông tin để xây dựng WBS cho các dự án phần mềm?',
        answers: [
            'A. Các tài liệu liên quan đến dự án và tài liệu phụ trợ', 
            'B. Những người có liên quan trực tiếp hoặc gián tiếp đến dự án', 
            'C. Thông tin về hệ thống phần mềm hiện tại (cho dự án thay thế)', 
            'D. Cả 3 đáp án trên'],
        correct: 'D. Cả 3 đáp án trên'
    }, 
    {
        id: 5,
        question: 'Phương pháp nào sau đây phù hợp với việc xây dựng WBS cho các dự án phần mềm sử dụng mô hình thác nước?',
        answers: [
            'A. Xây dựng WBS dựa trên quy trình (theo các giai đoạn)', 
            'B. Xây dựng WBS dựa trên sản phẩm', 
            'C. Xây dựng WBS dựa trên công việc', 
            'D. Xây dựng WBS dựa trên sơ đồ tư duy'],
        correct: 'A. Xây dựng WBS dựa trên quy trình (theo các giai đoạn)'
    }, 
    {
        id: 6,
        question: 'Chọn trình tự đúng nhất để xây dựng phạm vi của dự án?',
        answers: [
            'A. Xây dựng SOW, xây dựng hiến chương dự án (Project charter), xây dựng kế hoạch quản lý phạm vi, xác định phạm vi dự án, xây dựng WBS và WBS dictionary', 
            'B. Xây dựng WBS, xác định phạm vi dự án, xây dựng hiến chương dự án, xác định các điều khoản hợp đồng, xây dựng WBS chứa các công việc của hợp đồng', 
            'C. Nghiên cứu khả thi, xây dựng hợp đồng, xác định các điều khoản hợp đồng, mô tả các công việc cần làm, lập tài liệu khởi động dự án', 
            'D. Xây dựng hợp đồng, lập kế hoạch thực hiện hợp đồng, xây dựng hiến chương dự án, xây dựng kế hoạch quản lý phạm vi, xác định các mốc thời gian quan trọng'],
        correct: 'A. Xây dựng SOW, xây dựng hiến chương dự án (Project charter), xây dựng kế hoạch quản lý phạm vi, xác định phạm vi dự án, xây dựng WBS và WBS dictionary'
    }, 
    {
        id: 7,
        question: 'Đâu là cách tiếp cận chính để xây dựng phạm vi của dự án?',
        answers: [
            'A. Dựa vào sản phẩm cần bàn giao (hướng sản phẩm)', 
            'B. Dựa vào quy trình để tạo ra các sản phẩm (hướng quy trình)', 
            'C. Dựa vào các quy trình nghiệp vụ của khách hàng', 
            'D. Cả A và B'],
        correct: 'D. Cả A và B'
    }, 
    {
        id: 8,
        question: 'Những đặc trưng nào được dùng để quyết định phạm vi của dự án phần mềm?',
        answers: [
            'A. Mục tiêu của dự án, các chức năng/dịch vụ và hiệu năng', 
            'B. Ngữ cảnh của hệ thống, LOC và các chức năng/dịch vụ', 
            'C. Ngữ cảnh của hệ thống, các chức năng/dịch vụ, yêu cầu giao tiếp', 
            'D. Yêu cầu giao tiếp, hiệu năng, mục tiêu của dự án'],
        correct: 'A.Mục tiêu của dự án, các chức năng/dịch vụ và hiệu năng'
    }, 
    {
        id: 9,
        question: '… là tập các công việc được tổ chức theo cấu trúc phân cấp sao cho khi thực hiện chúng thì đạt được mục tiêu của dự án.',
        answers: [
            'A. Định nghĩa phạm vi dự án', 
            'B. Từ điễn WBS', 
            'C. WBS', 
            'D. Tập hợp các công việc'],
        correct: 'C. WBS'
    }, 
    {
        id: 10,
        question: 'Biểu đồ dưới đây chỉ ra việc chia nhỏ các hoạt động dự án cụ thể từ tổng quát tới mức chi tiết. Tên của biểu đồ này là gì?',
        images: 'https://firebasestorage.googleapis.com/v0/b/fir-rntest-2208f.appspot.com/o/Quiz%2Fchap4%2F1.png?alt=media&token=07069d2e-68e3-4314-9653-67250270d828',
        answers: [
            'A. DFD', 
            'B. DOA', 
            'C. WBS', 
            'D. PERT'],
        correct: 'C. WBS'
    }, 
    {
        id: 11,
        question: 'Giải pháp nào được sử dụng trong quy trình xây dựng WBS của dự án?',
        answers: [
            'A. Phân rã (Decomposition)', 
            'B. Brainstorming', 
            'C. Phân bổ nguồn nhân lực', 
            'D. Phân bổ nguồn kinh phí'],
        correct: 'A. Phân rã (Decomposition)'
    }, 
    {
        id: 12,
        question: 'Một tài liệu được gọi là … được tạo ra bằng cách phân rã phạm vi dự án thành các phần tử nhỏ hơn để thuận tiện cho việc quản lý và thực hiện dự án.',
        answers: [
            'A. Cấu trúc phân cấp công việc (WBS)', 
            'B. Yêu cầu của dự án (SoW) ', 
            'C. Yêu cầu thay đổi', 
            'D. Lịch trình dự án'],
        correct: 'A. Cấu trúc phân cấp công việc (WBS)'
    }, 
    {
        id: 13,
        question: 'Các công việc của một dự án được mô tả tại …',
        answers: [
            'A. Cấu trúc phân rã công việc (WBS)', 
            'B. Bảng liệt kê công việc dự án', 
            'C. Kế hoạch thực hiện dự án', 
            'D. Yêu cầu của dự án'],
        correct: 'A. Cấu trúc phân rã công việc (WBS)'
    }, 
    {
        id: 14,
        question: 'Chọn phát biểu đúng về phạm vi dự án.',
        answers: [
            'A. Phạm vi dự án mô tả những việc cần phải làm của dự án.', 
            'B. Xác định phạm vi dự án là một trong những công việc quan trọng nhất.', 
            'C. Phạm vi dự án mô tả những việc không cần phải làm của dự án.', 
            'D. Cả 3 đáp án trên'],
        correct: 'D. Cả 3 đáp án trên'
    }, 
]

export default (n = quizBank4.length) => Promise.resolve(quizBank4.sort(() => 0.5 - Math.random()).slice(0, n));
