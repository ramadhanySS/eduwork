function Table(init, currentPage = 1, rowsPerPage = 3) {
  function createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });
    return open + close;
  }

  function createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentPageData = data.slice(startIndex, endIndex);

    currentPageData.forEach((d) => {
      open += `
              <tr>
                  <td>${d[0]}</td>
                  <td>${d[1]}</td>
                  <td>${d[2]}</td>
              </tr>
              `;
    });
    return open + close;
  }

  function render(element) {
    let table =
      "<table class='table table-hover'>" +
      createHeader(init.columns) +
      createBody(init.data) +
      "</table>";

    const totalPages = Math.ceil(init.data.length / rowsPerPage);

    let pagination = `<nav aria-label="Page navigation example">
                  <ul class="pagination">
                      <li class="page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }">
                          <a class="page-link" href="#" onclick="goToPage(${
                            currentPage - 1
                          })">Previous</a>
                      </li>`;
    for (let i = 1; i <= totalPages; i++) {
      pagination += `
                      <li class="page-item ${
                        currentPage === i ? "active" : ""
                      }">
                          <a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>
                      </li>`;
    }
    pagination += `<li class="page-item ${
      currentPage === totalPages ? "disabled" : ""
    }">
                  <a class="page-link" href="#" onclick="goToPage(${
                    currentPage + 1
                  })">Next</a>
              </li>
          </ul>
      </nav>`;

    element.innerHTML = table + pagination;
  }

  function goToPage(page) {
    currentPage = page;
    render(document.getElementById("app"));
  }

  return {
    render,
    goToPage,
  };
}



export default Table;
