const quizBank7 = [
    {
        id: 1,
        question: 'Nhóm người nào chịu trách nhiệm chính về chất lượng của dự án?',
        answers: [
            'A. Đội dự án', 
            'B. Khách hàng', 
            'C. Người tài trợ dự án', 
            'D. Các lãnh đạo cấp cao'],
        correct: 'A. Đội dự án'
    }, 
    {
        id: 2,
        question: 'Chiến lược kiểm thử nào sử dụng đặc tả yêu cầu để sinh các ca kiểm thử?',
        answers: [
            'A. Kiểm thử hộp trắng', 
            'B. Kiểm thử hộp đen', 
            'C. Kiểm thử hộp xám', 
            'D. Kiểm thử chấp nhận'],
        correct: 'B. Kiểm thử hộp đen'
    }, 
    {
        id: 3,
        question: 'Mục tiêu chính của kiểm thử chấp nhận là: ',
        answers: [
            'A. Đảm bảo rằng hệ thống có thể chấp nhận được đối với tất cả người dùng', 
            'B. Tìm lỗi trong hệ thống', 
            'C. Kiểm thử hệ thống với các hệ thống khác', 
            'D. Kiểm thử một quan điểm công việc'],
        correct: 'A. Đảm bảo rằng hệ thống có thể chấp nhận được đối với tất cả người dùng'
    }, 
    {
        id: 4,
        question: 'Những mức độ kiểm thử nào thường được dùng trong mô hình chữ V?',
        answers: [
            'A. Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống và kiểm thử chấp nhận', 
            'B. Kiểm tra gia tăng, kiểm tra toàn diện, kiểm tra thăm dò và kiểm tra dữ liệu', 
            'C. Kiểm thử tích hợp, kiểm thử hệ thống, kiểm thử chấp nhận và kiểm thủ hồi quy', 
            'D. Kiểm thử Alpha, kiểm thử Beta, kiểm thử hộp đen và kiểm thử hộp trắng'],
        correct: 'A. Kiểm thử đơn vị, kiểm thử tích hợp, kiểm thử hệ thống và kiểm thử chấp nhận'
    }, 
    {
        id: 5,
        question: 'Hoạt động nào sau đây không cần thực thi/chạy chương trình?',
        answers: [
            'A. Kiểm thử hiệu năng', 
            'B. Kiểm thử cấu trúc', 
            'C. Code review', 
            'D. Kiểm thử chức năng'],
        correct: 'C. Code review'
    }, 
    {
        id: 6,
        question: 'Kiểm thử các yêu cầu phi chức năng bao gồm:',
        answers: [
            'A. Kiểm thử để xem liệu hệ thống có hoạt động đúng chức năng hay không', 
            'B. Kiểm thử các chức năng có thể không tồn tại', 
            'C. Kiểm thử các thuộc tính của hệ thống bao gồm hiệu năng, khả năng chịu tải, tính dễ dùng, …', 
            'D. Kiểm thử độ tin cậy của hệ thống'],
        correct: 'C. Kiểm thử các thuộc tính của hệ thống bao gồm hiệu năng, khả năng chịu tải, tính dễ dùng, …'
    }, 
    {
        id: 7,
        question: 'Đội dự án gần đi tới phần cuối cùng của việc xây dựng và sẵn sàng kiểm thử toàn bộ ứng dụng. Họ sẽ thực hiện loại hình kiểm thử nào?',
        answers: [
            'A. Kiểm thử hệ thống', 
            'B. UAT (Kiểm thử chấp thuận người sử dụng)', 
            'C. Kiểm thử đơn vị', 
            'D. Kiểm thử tích hợp'],
        correct: 'A. Kiểm thử hệ thống'
    }, 
    {
        id: 8,
        question: 'Kiểm soát chất lượng là:',
        answers: [
            'A. Đánh giá toàn bộ kết quả dự án trên cơ sở đều đặn.', 
            'B. Hoạt động để tăng tính hiệu lực và hiệu suất của dự án.', 
            'C. Xác định các chuẩn chất lượng nào liên quan tới dự án.', 
            'D. Giám sát các kết quả của dự án cụ thể để xác định xem liệu chúng có tuân theo các chuẩn chất lượng liên quan hay không'],
        correct: 'D. Giám sát các kết quả của dự án cụ thể để xác định xem liệu chúng có tuân theo các chuẩn chất lượng liên quan hay không'
    }, 
    {
        id: 9,
        question: 'Một trong các quy trình nào sau đây là quan trọng nhất để đáp ứng các mục tiêu quản lý chất lượng?',
        answers: [
            'A. Xem xét kỹ lưỡng', 
            'B. Lập kế hoạch', 
            'C. Kiểm định chất lượng.', 
            'D. Phân tích xu hướng'],
        correct: 'B. Lập kế hoạch'
    }, 
    {
        id: 10,
        question: 'Phát biểu nào về kiểm thử chấp thuận người dùng là đúng?',
        answers: [
            'A. Kiểm thử người dùng nên chứng tỏ rằng hệ thống vận hành tốt với các yêu cầu đã được xác định.', 
            'B. Kiểm thử người dùng tạo cơ hội cho người dùng cải thiện nhu cầu của họ.', 
            'C. Kiểm thử người dùng tạo cơ hội tốt để nhận biết các sai sót trong mã nguồn.', 
            'D. Kiểm thử người dùng nên được thực hiện như một phần của giai đoạn đào tạo triển'],
        correct: 'A. Kiểm thử người dùng nên chứng tỏ rằng hệ thống vận hành tốt với các yêu cầu đã được xác định.'
    }, 
    {
        id: 11,
        question: 'Tại sao việc lấy ý kiến của người sử dụng về khả năng chấp nhận sản phẩm là một phần của kế hoạch quản lý chất lượng?',
        answers: [
            'A. Để đảm bảo rằng dự án tuân theo mong muốn về ràng buộc kinh phí của người sử dụng.', 
            'B. Để đảm bảo rằng người sử dụng không đệ trình yêu cầu thay đổi muộn trong dự án.', 
            'C. Để đảm bảo rằng người sử dụng sẽ không có ý kiến gì thêm khi sử dụng sản phẩm.', 
            'D. Để đảm bảo rằng dự án tuân theo mong muốn của người sử dụng bởi vì nó liên quan tới chất lượng sản phẩm.'],
        correct: 'D. Để đảm bảo rằng dự án tuân theo mong muốn của người sử dụng bởi vì nó liên quan tới chất lượng sản phẩm.'
    }, 
    {
        id: 12,
        question: 'Giải thích nào sau đây là phù hợp với đảm bảo chất lượng trong quản lý chất lượng dự án?',
        answers: [
            'A. Các hoạt động được lập kế hoạch và có hệ thống đảm bảo rằng các tiêu chí chất lượng được chỉ rõ trong một dự án được đáp ứng.', 
            'B. Xác định phương pháp loại bỏ nguyên nhân của một kết quả không thỏa mãn liên quan đến tiêu chí chất lượng được chỉ rõ cho một dự án.', 
            'C. Giám sát xem liệu kết quả thực hiện dự án có tuân thủ các tiêu chí chất lượng đã được chỉ rõ hay không.', 
            'D. Thiết lập các tiêu chí chất lượng thích hợp cho kết quả thực hiện dự án và xác định các thủ tục để đáp ứng cho các tiêu chí này.'],
        correct: 'A. Các hoạt động được lập kế hoạch và có hệ thống đảm bảo rằng các tiêu chí chất lượng được chỉ rõ trong một dự án được đáp ứng.'
    }, 
    
]

export default (n = quizBank7.length) => Promise.resolve(quizBank7.sort(() => 0.5 - Math.random()).slice(0, n));
