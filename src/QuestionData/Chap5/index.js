const quizBank5 = [
    {
        id: 1,
        question: 'Trong phương pháp điểm chức năng (FP), tổ hợp nào sau đây là tổ hợp thích hợp của các đặc điểm hệ thống được dùng để điều chỉnh số các điểm chức năng được ước lượng?',
        answers: [
            'A. Khả năng của người dùng cuối, thời gian đáp ứng và khối lượng giao tác', 
            'B. Phần trăm đầu vào trực tuyến, ngôn ngữ lập trình cho phát triển và khả năng sử dụng lại', 
            'C. Khối lượng trao đổi dữ liệu, độ phức tạp của logic và số các bước của chương trình', 
            'D. Khối lượng xử lý ngoại lệ, kỹ năng phát triển nhân viên và số lượng các địa điểm vận hành'],
        correct: 'A. Khả năng của người dùng cuối, thời gian đáp ứng và khối lượng giao tác'
    }, 
    {
        id: 2,
        question: 'Mô tả nào sau đây là thích hợp liên quan tới ước lượng giờ công trong phát triển hệ thống?',
        answers: [
            'A. Kích cỡ của chương trình được phát triển trong quá khứ là thông tin hữu ích khi ước lượng, nhưng giờ công thì không vì kỹ năng phát triển biến đổi rộng giữa các nhân viên', 
            'B. Để dùng COCOMO, phải thu thập đủ dữ liệu về năng suất và hiệu năng của công ty', 
            'C. Ước lượng về số giờ công là hiệu quả cho quản lý tiến độ, nhưng chẳng có gì liên quan tới quản lý chất lượng phần mềm', 
            'D. Để thực hiện ước lượng bằng việc dùng phương pháp điểm chức năng, cần phải hiểu số lượng bước chương trình'],
        correct: 'B. Để dùng COCOMO, phải thu thập đủ dữ liệu về năng suất và hiệu năng của công ty'
    }, 
    {
        id: 3,
        question: 'Đâu là ưu điểm chính của việc ước lượng kích thước của phần mềm sử dụng LOC?',
        answers: [
            'A. LOC dễ dàng được tính toán', 
            'B. LOC phụ thuộc vào ngôn ngữ lập trình', 
            'C. LOC độc lập với ngôn ngữ lập trình', 
            'D. LOC là giải pháp duy nhất để ước lượng kích thước của phần mềm'],
        correct: 'A. LOC dễ dàng được tính toán'
    }, 
    {
        id: 4,
        question: 'Đâu là ưu điểm chính của việc ước lượng kích thước của phần mềm sử dụng phương pháp điểm chức năng (FP)?',
        answers: [
            'A. FP dễ dàng được tính toán', 
            'B. FP độc lập với ngôn ngữ lập trình', 
            'C. FP có thể tính toán sớm (trước khi thiết kế hoàn thành)', 
            'D. Cả B và C'],
        correct: 'D. Cả B và C'
    }, 
    {
        id: 5,
        question: 'Đối tượng nào dưới đây không được quan tâm để ước lượng trong quản lý dự án phần mềm?',
        answers: [
            'A. Đầu vào', 
            'B. Nhu cầu thị trường (markets)', 
            'C. Đầu ra', 
            'D. Kết quả'],
        correct: 'B. Nhu cầu thị trường (markets)'
    }, 
    {
        id: 6,
        question: 'Lý do duy nhất để một kết quả ước lượng thiếu tin cậy là sự thiếu kinh nghiệm của người thực hiện ước lượng.',
        answers: [
            'A. Sai', 
            'B. Đúng', 
            'C. ', 
            'D. '],
        correct: 'A. Sai'
    }, 
    {
        id: 7,
        question: 'Một trong những mục đích của lập kế hoạch dự án là … ',
        answers: [
            'A. Thuyết phục khách hàng tin vào tính khả thi của dự án', 
            'B. Xây dựng dữ liệu lịch sử phát triển dự án', 
            'C. Giúp cho quản lý dự án tiến hành các ước lượng phù hợp về chi phí và lịch trình thực hiện dự án', 
            'D. Để quyết định lợi ích về mặt kinh phí khi thực hiện dự án'],
        correct: 'C. Giúp cho quản lý dự án tiến hành các ước lượng phù hợp về chi phí và lịch trình thực hiện dự án'
    }, 
    {
        id: 8,
        question: 'Tính khả thi của một dự án phần mềm được phân tích dựa trên các yếu tố …',
        answers: [
            'A. Phạm vi, các ràng buộc và thị trường', 
            'B. Kỹ thuật, tài chính, thời gian và nguồn lực', 
            'C. Năng lực và kinh nghiệm của nhóm phát triển', 
            'D. Tiềm lực tài chính của chủ đầu tư'],
        correct: 'B. Kỹ thuật, tài chính, thời gian và nguồn lực'
    }, 
    {
        id: 9,
        question: 'Số nhân công cần thiết cho một dự án được quyết định …',
        answers: [
            'A. Sau khi hoàn thành ước lượng nỗ lực/công sức (effort) của việc phát triển dự án', 
            'B. Bởi nguồn kinh phí được cấp của dự án', 
            'C. Từ kết quả đánh giá độ phức tạp của dự án', 
            'D. Tất cả các đáp án trên '],
        correct: 'A. Sau khi hoàn thành ước lượng nỗ lực/công sức (effort) của việc phát triển dự án'
    }, 
    {
        id: 10,
        question: 'Đâu là mục tiêu chính của quá trình quản lý chi phí dự án?',
        answers: [
            'A. Để hoàn thành dự án với chi phí nhỏ nhất có thể', 
            'B. Để hoàn thành dự án với chi phí trong định mức đã được phê duyệt', 
            'C. Để đảm bảo tiền đầu tư của doanh nghiệp/tổ chức được sử dụng hiệu quả', 
            'D. Để cung cấp chân thực và chính xác thông tin về chi phí của dự án'],
        correct: 'C. Để đảm bảo tiền đầu tư của doanh nghiệp/tổ chức được sử dụng hiệu quả'
    }, 
    {
        id: 11,
        question: 'COCOMO II cho phép ước lượng dự án phần mềm với đầu vào là …',
        answers: [
            'A. LOC', 
            'B. FP (số điểm chức năng)', 
            'C. Số điểm đối tượng (object points)', 
            'D. Tất cả các đáp án trên'],
        correct: 'D. Tất cả các đáp án trên'
    }, 
    {
        id: 12,
        question: 'Yêu câu của khách hàng gửi cho nhóm phát triển để ước lượng sớm dự án thường được gọi là …',
        answers: [
            'A. Đặc tả yêu cầu', 
            'B. SoW', 
            'C. Thiết kế của phần mềm', 
            'D. Quy trình nghiệp vụ của khách hàng'],
        correct: 'B. SoW'
    }, 
    {
        id: 13,
        question: 'Đâu là phương pháp tốt để ước lượng sớm dự án với đầu vào là kích thước dự án?',
        answers: [
            'A. Thương lượng với khách hàng', 
            'B. Sử dụng ý kiến chuyên gia', 
            'C. Sử dụng kết quả thống kê từ CSDL các dự án đã hoàn thành', 
            'D. Sử dụng các phương pháp toán học'],
        correct: 'C. Sử dụng kết quả thống kê từ CSDL các dự án đã hoàn thành'
    }, 
    {
        id: 14,
        question: 'Đâu là quy trình để ước lượng kích thước của dự án?',
        answers: [
            'A. Xây dựng WBS từ SoW, ước lượng kích thước từng công việc của WBS để có được kích thước của dự án', 
            'B. Hỏi ý kiến khách hàng', 
            'C. Sử dụng ý kiến chuyên gia', 
            'D. Sử dụng dự án tương tự'],
        correct: 'A. Xây dựng WBS từ SoW, ước lượng kích thước từng công việc của WBS để có được kích thước của dự án'
    }, 
    {
        id: 15,
        question: 'Công cụ nào sau đây có thể hỗ trợ để lập dự toán kinh phí cho dự án?',
        answers: [
            'A. MS Excel', 
            'B. MS Project ', 
            'C. MS Word', 
            'D. MS Access'],
        correct: 'A. MS Excel'
    }, 
    {
        id: 16,
        question: 'Phương pháp nào là cách tiếp cận hiệu quả để xây dựng ước tính thời đoạn nhiệm vụ dự án?',
        answers: [
            'A. Ước lượng trên xuống', 
            'B. Ước lượng ngẫu nhiên', 
            'C. Ý kiến chuyên gia', 
            'D. Kỹ thuật giá trị.'],
        correct: 'C. Ý kiến chuyên gia'
    }, 
    {
        id: 17,
        question: 'Nhân tố nào có ảnh hưởng lớn nhất tới chi phí lao động theo ước tính trên đơn vị cho dự án?',
        answers: [
            'A. Thông tin lịch sử về chi phí các dự án tương tự', 
            'B. Các yêu cầu mức độ kỹ năng nguồn nhân lực', 
            'C. Sử dụng các nhà cung cấp bên ngoài.', 
            'D. Số lượng chuyên gia được sử dụng trong dự án'],
        correct: 'B. Các yêu cầu mức độ kỹ năng nguồn nhân lực'
    }, 
    {
        id: 18,
        question: 'Nhà tài trợ dự án chịu trách nhiệm về …',
        answers: [
            'A. Nguồn tài chính chứ không phải kết quả.', 
            'B. Không phải nguồn tài chính cũng không phải kết quả dự án.', 
            'C. Cả nguồn tài chính và kết quả dự án.', 
            'D. Kết quả dự án chứ không phải nguồn tài chính.'],
        correct: 'C. Cả nguồn tài chính và kết quả dự án.'
    }, 
    {
        id: 19,
        question: 'Các yếu tố cấn ước lượng là …',
        answers: [
            'A. Công sức (effort)', 
            'B. Thời gian', 
            'C. Nhân sự (bao nhiêu người)', 
            'D. Tất cả các đáp án trên'],
        correct: 'D. Tất cả các đáp án trên'
    }, 
    {
        id: 20,
        question: 'Chọn phát biểu đúng về ước lượng dự án.',
        answers: [
            'A. Người càng có kinh nghiệm về ước lượng thì ước lượng càng chính xác', 
            'B. Khi có ít thông tin thì kết quả ước lượng càng thiếu chính xác', 
            'C. Công việc càng phức tạp (lớn) thì kết quả ước lượng càng thiếu chính xác', 
            'D. Tất cả các đáp án trên'],
        correct: 'D. Tất cả các đáp án trên'
    }, 

    
]

export default (n = quizBank5.length) => Promise.resolve(quizBank5.sort(() => 0.5 - Math.random()).slice(0, n));
