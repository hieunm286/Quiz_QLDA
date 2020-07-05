const quizBank8 = [
    {
        id: 1,
        question: 'Bốn đối tượng liên quan chính trong mỗi dự án?',
        answers: [
            'A. Giám đốc dự án, khách hàng, tổ chức thực hiện và các nhà tài trợ', 
            'B. Giám đốc dự án, đội dự án, các giám đốc cao cấp và khách hàng', 
            'C. Giám đốc cao cấp, giám đốc chức năng, khách hàng và nhà tài trợ', 
            'D. Giám đốc dự án, giám đốc chức năng, khách hàng và giám đốc cao cấp'],
        correct: 'A. Giám đốc dự án, khách hàng, tổ chức thực hiện và các nhà tài trợ'
    }, 
    {
        id: 2,
        question: 'Các nhà tài trợ dự án có ảnh hưởng lớn nhất đến phạm vi, chất lượng, thời đoạn và chi phícủa dự án trong suốt giai đoạn nào?',
        answers: [
            'A. Giai đoạn lập kế hoạch', 
            'B. Giai đoạn thực thi', 
            'C. Giai đoạn hoàn thiện', 
            'D. Giai đoạn xây dựng'],
        correct: 'A. Giai đoạn lập kế hoạch'
    }, 
    {
        id: 3,
        question: 'Nhân tố nào ảnh hưởng lớn nhất tới thời đoạn thực tế của các nhiệm vụ dự án?',
        answers: [
            'A. Chi phí nhiệm vụ', 
            'B. Khả năng về nguồn lực', 
            'C. Thông tin lịch sử về các dự án đã hoàn thành', 
            'D. Những người đi trước và người thành công'],
        correct: 'B. Khả năng về nguồn lực'
    }, 
    {
        id: 4,
        question: 'Thuật ngữ nào sau đây liên quan đến việc thực hiện đưa một công việc thầu phụ ví dụ như xây dựng vận hành và quản trị hệ thống ra một công ty bên ngoài?',
        answers: [
            'A. Hệ thống mở', 
            'B. Giảm cỡ (Down-sizing)', 
            'C. Khoán ngoài (outsourcing)', 
            'D. Làm đúng cỡ (Right-sizing)'],
        correct: 'C. Khoán ngoài (outsourcing)'
    }, 
    {
        id: 5,
        question: 'Mô tả nào sau đây là mô tả thích hợp liên quan tới tổ chức của đội phát triển phần mềm?',
        answers: [
            'A. Đội ngũ dân chủ bao gồm các thành viên có quyền hạn và nghĩa vụ ngang nhau. Cho phép trao đổi ý kiến tự do, nhưng người lãnh đạo không thể phát huy vai trò lãnh đạo kiên quết được.', 
            'B. Đội có cấu trúc phân cấp bao gồm một người quản trị, nhiều người lãnh đạo và các nhân viên. Ưu điểm là ở chỗ trách nhiệm của từng thành viên được xác định rõ ràng, nhưng nhược điểm là ở chỗ thường tồn tại những vấn đề về trao đổi thông tin.', 
            'C. Một đội chuyên gia bao gồm các thành viên có chuyên môn và kỹ năng. Được kiểm soát bởi người quản lý là chuyên viên quản lý.', 
            'D. Trong đội lập trình viên chính, người lãnh đạo có thể phát huy vai trò lãnh đạo kiên quyết nhưng cũng chịu một gánh nặng. Do đó, khó áp dụng vào dự án quy mô lớn và dài hạn.'],
        correct: 'A. Đội ngũ dân chủ bao gồm các thành viên có quyền hạn và nghĩa vụ ngang nhau. Cho phép trao đổi ý kiến tự do, nhưng người lãnh đạo không thể phát huy vai trò lãnh đạo kiên quết được.'
    }, 
    {
        id: 6,
        question: 'Phát biểu nào sau đây là phát biểu về những nguyên tắc cơ bản về cấu trúc của một tổ chức?',
        answers: [
            'A. Vì một thành viên trong tổ chức có thể nhận chỉ thị từ một hoặc nhiều người cấp trên, điều quan trọng là xây dựng một tổ chức có thể hỗ trợ điều đó.', 
            'B. Một hệ thống tổ chức mà trong đó mỗi thành viên riêng biệt có thể chịu trách nhiệm đối với một quy trình nghiệp vụ chuyên môn là không nên. Sự hài hòa với những người khác là điều quan trọng.', 
            'C. Mặc dù việc xác định mở rộng kiểm soát là quan trọng, nhưng không thể xác định trước số lượng thích hợp nhưng người cấp dưới mà mỗi người cấp trên có thể quản lý. Do đo, tốt hơn cả là có một người quản lý được càng nhiều càng tốt.', 
            'D. Những chỉ thị có thể chuyển từ trên xuống dưới một cách nhất quán bằng cách chia tổ chức thành vài tầng và thiết bị lập trách nhiệm cũng như quyền lực mỗi tầng.'],
        correct: 'D. Những chỉ thị có thể chuyển từ trên xuống dưới một cách nhất quán bằng cách chia tổ chức thành vài tầng và thiết bị lập trách nhiệm cũng như quyền lực mỗi tầng.'
    }, 
    {
        id: 7,
        question: 'Mệnh đề nào sau đây là đúng cho việc thuê công ty bên ngoài phát triển hệ thống?',
        answers: [
            'A. Một hợp đồng uỷ thác không quy định trách nhiệm cho việc hoàn thành công việc; do đó bên uỷ thác có quyền chỉ đạo trực tiếp.', 
            'B. Trong trường hợp phát triển hệ thống theo hợp đồng thầu khoán, mọi bản quyền về chương trình đã phát triển đều thuộc vào người thầu trừ phi được xác định khác.', 
            'C. Trong trường hợp phát triển hệ thống theo hợp đồng khoán ngoài hay hợp đồng cho thuê lao động, người thầu chịu trách nhiệm hoàn thành công việc.', 
            'D. Nếu phát hiện khiếm khuyết nghiêm trọng trong chương trình do người phát triển làm ra, mà người này được cử tới từ công ty khác, thì công ty đó có trách nhiệm với khiếm khuyết đó.'],
        correct: 'B. Trong trường hợp phát triển hệ thống theo hợp đồng thầu khoán, mọi bản quyền về chương trình đã phát triển đều thuộc vào người thầu trừ phi được xác định khác.'
    }, 
    {
        id: 8,
        question: 'Thách thức lớn nhất khi quản lý các bên liên quan là làm việc với …',
        answers: [
            'A. Chủ đầu tư (sponsor)', 
            'B. Khách hàng', 
            'C. Các lãnh đạo công ty', 
            'D. Nhân viên đội dự án'],
        correct: 'A. Chủ đầu tư (sponsor)'
    }, 
    {
        id: 9,
        question: 'Đâu là lý do của việc phải sử dụng đúng người đúng việc trong phân bổ nhân lực của dự án?',
        answers: [
            'A. Mỗi người có một sở trường sở đoản riêng.', 
            'B. Quản lý dự án không thể thay đổi con người của mỗi thành viên dự án.', 
            'C. Quản lý dự án phải biết được điểm mạnh điểm yếu của từng thành viên.', 
            'D. Tất cả các đáp án trên'],
        correct: 'D. Tất cả các đáp án trên'
    }, 
    {
        id: 10,
        question: 'Những yêu cầu cơ bản của một quản lý dự án để thể hiện tốt vai trò lãnh đạo dự án là …',
        answers: [
            'A. Phải có cái nhìn tổng thể về dự án, các bên liên quan, các hạng mục công việc, …', 
            'B. Luôn biết đâu là việc đúng cần phải làm (danh sách công việc, WBS, Project network, Grant chart là các công cụ hữu ích)', 
            'C. Luôn biết ai là người phù hợp để cổ vũ, động viên kịp thời và luôn nhấn mạnh ý nghĩa của công việc.', 
            'D. Tất cả các đáp án trên'],
            correct: 'D. Tất cả các đáp án trên'
    }, 
    {
        id: 11,
        question: 'Tại sao tố chất minh bạch chính trực là rất quan trọng đối với quản lý dự án?',
        answers: [
            'A. Vì minh bạch chính trực là nền tảng cho dự án thành công', 
            'B. Vì minh bạch chính trực là nền tảng cho hiệu quả và chất lượng công việc', 
            'C. Vì quản lý dự án phải làm gương. Khi nhân viên không tin tưởng, quản lý dự án không thể làm được gì.', 
            'D. Tất cả các đáp án trên'],
        correct: 'D. Tất cả các đáp án trên'
    }, 
    {
        id: 12,
        question: 'Tại sao quản lý dự án phải xây dựng mối quan hệ tốt với lãnh đạo của khách hàng?',
        answers: [
            'A. Người lãnh đạo có ý nghĩa trong mọi công việc.', 
            'B. Tôn trọng đối tác, mình sẽ được tôn trọng.', 
            'C. Làm việc với lãnh đạo sẽ quyết được nhiều việc nhanh và hiệu quả và cấp dưới của đối tác sẽ nỗ lực hơn.', 
            'D. Tất cả các đáp án trên'],
        correct: 'D. Tất cả các đáp án trên'
    }
]

export default (n = quizBank8.length) => Promise.resolve(quizBank8.sort(() => 0.5 - Math.random()).slice(0, n));
