import { useSelector, useDispatch } from 'react-redux';
// import { deleteBook } from '../store/actions/bookActions';
import { deleteBook } from '../store/slices/bookSlice';

const Library = () => {
    const dispatch = useDispatch();
    const { books } = useSelector((state) => state.books);

    const handleDelete = (id) => {
        dispatch(deleteBook({ id }));
    }

    const booksTable = books.map((book) => (
        <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.rating}</td>
            <td>
                <button 
                    className="delete"
                    onClick={() => handleDelete(book.id)}    
                >
                    X
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="library">
            <h2>Library</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th></th>
                    </tr>
                    {booksTable}
                </tbody>
            </table>
        </div>
    );
}

export default Library;
