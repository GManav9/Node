import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/frontend-view`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <>
      <div class="container">
        <div class="form-container">
          <div class="form-title text-center">Add New Book</div>
          <form action="http://localhost:3333/AddData" method="post">
            <div class="mb-3">
              <label for="title" class="form-label">
                Book Image
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter book Image"
                name="bookimage"
              />
            </div>

            <div class="mb-3">
              <label for="title" class="form-label">
                Book Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter book title"
                name="booktitle"
              />
            </div>

            <div class="mb-3">
              <label for="author" class="form-label">
                Author
              </label>
              <input
                type="text"
                class="form-control"
                id="author"
                placeholder="Enter author's name"
                name="bookauthor"
              />
            </div>

            <div class="mb-3">
              <label for="genre" class="form-label">
                Genre
              </label>
              <select class="form-select" name="bookgenre" id="genre">
                <option selected disabled>
                  Choose genre
                </option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Science</option>
                <option>Biography</option>
                <option>Fantasy</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label">
                Price ($)
              </label>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="Enter price"
                name="bookprice"
              />
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
                placeholder="Short description of the book"
                name="bookdescription"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Add Book
            </button>
          </form>
        </div>
      </div>
      <h1>MERN Project</h1>
      <div>
        {data.length > 0 ? (
          <div className="container my-5">
            <h2 className="mb-4 text-center">Featured Books</h2>
            <div className="row g-4">
              {data.map((e) => {
                return (
                  <div className="col-md-4">
                    <div className="card book-card p-3">
                      <img
                        src={e.bookimage}
                        className="card-img-top rounded img-fluid"
                        alt="Book Cover"
                        style={{ height: "500px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{e.booktitle}</h5>
                        <p className="card-text text-muted mb-1">
                          {e.bookauthor}
                        </p>
                        <span className="genre-tag mb-2 d-inline-block">
                          {e.bookgenre}
                        </span>
                        <p className="price-tag">{e.bookprice}</p>
                        <p className="card-text">{e.bookdescription}</p>
                        <div className="d-flex flex-wrap gap-2">
                          <a
                            href="/EditData?id={e.id}"
                            className="btn btn-sm btn-primary text-white"
                          >
                            <i className="bi bi-pencil-square"></i> Edit
                          </a>
                          <a
                            href="/DeleteData?id={e.id}"
                            className="btn btn-sm btn-danger"
                            onclick="return confirm('Are you sure you want to delete this book?')"
                          >
                            <i className="bi bi-trash"></i> Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App
