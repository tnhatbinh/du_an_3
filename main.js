// Dữ liệu mô phỏng (22 bản ghi)
let bills = [
  {
    id: "KH001",
    name: "Trần Văn T",
    service: "Tiền Nước",
    amount: 125000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH002",
    name: "Nguyễn Văn A",
    service: "Tiền Điện",
    amount: 450000,
    status: "Đã thanh toán",
  },
  {
    id: "KH003",
    name: "Phạm Thị B",
    service: "Internet",
    amount: 220000,
    status: "Đã thanh toán",
  },
  {
    id: "KH004",
    name: "Lê Hoàng C",
    service: "Tiền Nước",
    amount: 85000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH005",
    name: "Công ty TNHH Ánh Sáng",
    service: "Tiền Điện",
    amount: 1250000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH006",
    name: "Vũ Đức D",
    service: "Tiền Nước",
    amount: 340000,
    status: "Đã thanh toán",
  },
  {
    id: "KH007",
    name: "Hoàng Thanh E",
    service: "Tiền Điện",
    amount: 890000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH008",
    name: "Ngô Văn F",
    service: "Internet",
    amount: 250000,
    status: "Đã thanh toán",
  },
  {
    id: "KH009",
    name: "Đinh Phương G",
    service: "Tiền Nước",
    amount: 110000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH010",
    name: "Trần Thị H",
    service: "Tiền Điện",
    amount: 560000,
    status: "Đã thanh toán",
  },
  {
    id: "KH011",
    name: "Lý Văn I",
    service: "Internet",
    amount: 220000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH012",
    name: "Mai Thanh K",
    service: "Tiền Nước",
    amount: 95000,
    status: "Đã thanh toán",
  },
  {
    id: "KH013",
    name: "Bùi Đức L",
    service: "Tiền Điện",
    amount: 720000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH014",
    name: "Đoàn Thị M",
    service: "Internet",
    amount: 300000,
    status: "Đã thanh toán",
  },
  {
    id: "KH015",
    name: "Tô Hoàng N",
    service: "Tiền Nước",
    amount: 155000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH016",
    name: "Phan Trọng O",
    service: "Tiền Điện",
    amount: 480000,
    status: "Đã thanh toán",
  },
  {
    id: "KH017",
    name: "Võ Thị P",
    service: "Internet",
    amount: 220000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH018",
    name: "Dương Tuấn Q",
    service: "Tiền Nước",
    amount: 80000,
    status: "Đã thanh toán",
  },
  {
    id: "KH019",
    name: "Lê Minh R",
    service: "Internet",
    amount: 300000,
    status: "Đã thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH020",
    name: "Phạm Văn S",
    service: "Tiền Điện",
    amount: 1500000,
    status: "Chưa thanh toán",
  },
  {
    id: "KH021",
    name: "Ngô Thị T",
    service: "Tiền Nước",
    amount: 120000,
    status: "Đã thanh toán",
  },
  {
    id: "KH022",
    name: "Trịnh Đức U",
    service: "Internet",
    amount: 220000,
    status: "Chưa thanh toán",
  },
];

// Biến điều khiển
let currentPage = 1;
let itemsPerPage = 15;
let editingId = null;
let searchQuery = "";
let currentStatusFilter = "";

// 1. TÌM KIẾM & LỌC DỮ LIỆU
function handleSearch(query) {
  searchQuery = query.toLowerCase().trim();
  currentPage = 1; // Reset về trang 1 khi lọc
  renderTable();
}

function handleStatusFilter(status) {
  currentStatusFilter = status;
  currentPage = 1;
  renderTable();
}

// 2. RENDER BẢNG VÀ PHÂN TRANG
function renderTable() {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  // Lọc mảng theo Search và Status
  let filteredBills = bills.filter((b) => {
    const matchSearch =
      b.name.toLowerCase().includes(searchQuery) ||
      b.id.toLowerCase().includes(searchQuery);
    const matchStatus =
      currentStatusFilter === "" ? true : b.status === currentStatusFilter;
    return matchSearch && matchStatus;
  });

  const totalItems = filteredBills.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const pageBills = filteredBills.slice(startIndex, endIndex);

  // Reset nút check-all
  const checkAllBox = document.getElementById("check-all");
  if (checkAllBox) checkAllBox.checked = false;

  // Render dữ liệu
  pageBills.forEach((bill) => {
    const tr = document.createElement("tr");
    const statusColor = bill.status === "Chưa thanh toán" ? "red" : "green";
    const amountFormatted = Number(bill.amount).toLocaleString("vi-VN");

    tr.innerHTML = `
            <td style="text-align: center;">
                <input type="checkbox" class="row-checkbox" value="${bill.id}" onchange="updateSelection()">
            </td>
            <td><i class="fa fa-user" style="color: #ccc; margin-right: 5px;"></i> ${bill.id}</td>
            <td>${bill.name}</td>
            <td>${bill.service}</td>
            <td style="text-align: right; padding-right: 20px;">${amountFormatted}</td>
            <td style="text-align: center; color: ${statusColor}; font-weight: bold;">${bill.status}</td>
            <td style="text-align: center;">
                <i class="fa fa-edit action-icon icon-edit" title="Sửa" onclick="openModal('${bill.id}')"></i>
                <i class="fa fa-times action-icon icon-delete" title="Xóa" onclick="deleteData('${bill.id}')"></i>
                <i class="fa fa-caret-down action-icon" style="color: #888; font-size: 10px;"></i>
            </td>
        `;
    tbody.appendChild(tr);
  });

  // Render Text Phân trang
  document.getElementById("page-input").value = currentPage;
  const infoText =
    totalItems === 0
      ? `0 bản ghi`
      : `${startIndex + 1} - ${endIndex} / ${totalItems} bản ghi`;
  document.getElementById("page-info-text").innerHTML =
    `${infoText} <i class="fa fa-sync-alt"></i>`;
}

// 3. TƯƠNG TÁC CHECKBOX & XÓA NHIỀU
function toggleCheckAll(source) {
  const checkboxes = document.querySelectorAll(".row-checkbox");
  checkboxes.forEach((cb) => (cb.checked = source.checked));
}

function updateSelection() {
  const checkAll = document.getElementById("check-all");
  const checkboxes = document.querySelectorAll(".row-checkbox");
  const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
  if (checkboxes.length > 0) checkAll.checked = allChecked;
}

function getSelectedIds() {
  return Array.from(document.querySelectorAll(".row-checkbox:checked")).map(
    (cb) => cb.value,
  );
}

function editSelected() {
  const selectedIds = getSelectedIds();
  if (selectedIds.length === 0) alert("Vui lòng tick chọn 1 bản ghi để sửa!");
  else if (selectedIds.length > 1) alert("Chỉ được sửa 1 bản ghi cùng lúc!");
  else openModal(selectedIds[0]);
}

function deleteSelected() {
  const selectedIds = getSelectedIds();
  if (selectedIds.length === 0) {
    alert("Vui lòng tick chọn ít nhất 1 bản ghi để xóa!");
    return;
  }
  if (confirm(`Xác nhận xóa ${selectedIds.length} bản ghi đang chọn?`)) {
    bills = bills.filter((b) => !selectedIds.includes(b.id));
    renderTable();
  }
}

// 4. CHUYỂN TRANG
function changePage(action) {
  // Phải lấy mảng đã lọc để tính tổng số trang
  let filteredCount = bills.filter((b) => {
    const matchSearch =
      b.name.toLowerCase().includes(searchQuery) ||
      b.id.toLowerCase().includes(searchQuery);
    const matchStatus =
      currentStatusFilter === "" ? true : b.status === currentStatusFilter;
    return matchSearch && matchStatus;
  }).length;

  const totalPages = Math.ceil(filteredCount / itemsPerPage) || 1;

  if (action === "first") currentPage = 1;
  if (action === "prev" && currentPage > 1) currentPage--;
  if (action === "next" && currentPage < totalPages) currentPage++;
  if (action === "last") currentPage = totalPages;
  renderTable();
}

function changeItemsPerPage() {
  itemsPerPage = Number(document.getElementById("items-per-page").value);
  currentPage = 1;
  renderTable();
}

// 5. C.R.U.D CHI TIẾT
function openModal(id = null) {
  editingId = id;
  const inpId = document.getElementById("inp-id");

  if (id) {
    const bill = bills.find((b) => b.id === id);
    document.getElementById("modal-title").innerText =
      "CẬP NHẬT THÔNG TIN HÓA ĐƠN";
    inpId.value = bill.id;
    inpId.disabled = true;
    document.getElementById("inp-name").value = bill.name;
    document.getElementById("inp-service").value = bill.service;
    document.getElementById("inp-amount").value = bill.amount;
    document.getElementById("inp-status").value = bill.status;
  } else {
    document.getElementById("modal-title").innerText = "THÊM HÓA ĐƠN MỚI";
    inpId.value = "";
    inpId.disabled = false;
    document.getElementById("inp-name").value = "";
    document.getElementById("inp-service").value = "Tiền Nước";
    document.getElementById("inp-amount").value = "";
    document.getElementById("inp-status").value = "Chưa thanh toán";
  }
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function saveData() {
  const id = document.getElementById("inp-id").value.trim();
  const name = document.getElementById("inp-name").value.trim();
  const service = document.getElementById("inp-service").value;
  const amount = document.getElementById("inp-amount").value;
  const status = document.getElementById("inp-status").value;

  if (!id || !name || !amount) {
    alert("Vui lòng nhập đủ Mã, Tên và Số tiền!");
    return;
  }

  if (editingId) {
    const index = bills.findIndex((b) => b.id === editingId);
    if (index !== -1) {
      bills[index] = { id, name, service, amount: Number(amount), status };
    }
  } else {
    if (bills.find((b) => b.id === id)) {
      alert("Mã Khách Hàng này đã tồn tại trong hệ thống!");
      return;
    }
    bills.unshift({ id, name, service, amount: Number(amount), status });
  }

  closeModal();
  renderTable();
}

function deleteData(idToRemove) {
  if (confirm("Bạn có chắc chắn muốn xóa bản ghi hóa đơn này?")) {
    bills = bills.filter((b) => b.id !== idToRemove);
    renderTable();
  }
}

// 6. XỬ LÝ ĐĂNG NHẬP
function handleLogin() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app-screen").style.display = "flex";
}

function handleLogout() {
  document.getElementById("login-screen").style.display = "flex";
  document.getElementById("app-screen").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable();
});
