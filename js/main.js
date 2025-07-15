let canCreateStar = true;

document.addEventListener("mousemove", function (e) {
  if (!canCreateStar) return;

  canCreateStar = false;

  const star = document.createElement("div");
  star.className = "star";
  star.textContent = "★";
  star.style.left = e.pageX - 10 + "px";
  star.style.top = e.pageY - 10 + "px";

  document.body.appendChild(star);

  // Xoá ngôi sao sau animation
  setTimeout(() => {
    star.remove();
  }, 1500);

  // Chỉ tạo 1 ngôi sao mỗi 200ms (hoặc tăng lên nếu muốn ít hơn)
  setTimeout(() => {
    canCreateStar = true;
  }, 80);
});
