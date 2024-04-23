/*
CHECKLIST
[x] 모달 창 띄우기
[x] 댓글 버튼
*/

function validateComment() {
    var commentInput = document.getElementById('comment');
    var commentBtn = document.getElementById('post-comment');
    
    if (isValue(commentInput.value)) {
        commentBtn.style.backgroundColor = 'var(--btn-purple-possible)';
        commentBtn.disabled = false;
        commentBtn.style.cursor = 'pointer';
    } else {
        commentBtn.style.backgroundColor = 'var(--btn-purple)'
        commentBtn.disabled = true;
        commentBtn.style.cursor = 'not-allowed';
    }
}

// 게시글 삭제 버튼
var boardDeleteBtn = document.getElementById('board-delete-btn');
// 게시글 삭제 모달
var boardDeleteModal = document.getElementById('board-delete');
// 댓글 삭제 버튼
var commentDeleteBtn = document.getElementById('comment-delete-btn')
// 댓글 삭제 모달
var commentDeleteModal = document.getElementById('comment-delete');



document.getElementById('comment').addEventListener('input', validateComment);

var overlay = document.getElementById('overlay');
// board delete
boardDeleteBtn.addEventListener('click', function() {
    boardDeleteModal.style.display = 'flex';
    freeze(overlay);
});
commentDeleteBtn.addEventListener('click', function() {
    commentDeleteModal.style.display = 'flex';
    freeze(overlay);
});

