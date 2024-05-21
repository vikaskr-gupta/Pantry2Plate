import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Ingredient from "./components/Ingredient";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

const base_url = process.env.REACT_APP_API_URL;

function App() {
	const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "time", order: "desc" });
	const [filterIngredient, setFilterIngredient] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getAllRecipes = async () => {
			try {
				const url = `${base_url}?page=${page}&sort=${sort.sort},${
					sort.order
				}&ingredient=${filterIngredient.toString()}&search=${search}`;
				const { data } = await axios.get(url);
				setObj(data);
			} catch (err) {
				console.log(err);
			}
		};

		getAllRecipes();
	}, [sort, filterIngredient, page, search]);

	return (
		<div className="wrapper">
			<div className="container">
				<div className="head">
					<img src="./images/logo.png" alt="logo" className="logo" />
					<Search setSearch={(search) => setSearch(search)} />
				</div>
				<div className="body">
					<div className="table_container">
						<Table recipes={obj.recipes ? obj.recipes : []} />
						<Pagination
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>
					</div>
					<div className="filter_container">
						<Sort sort={sort} setSort={(sort) => setSort(sort)} />
						<Ingredient
							filterIngredient={filterIngredient}
							ingredients={obj.ingredients ? obj.ingredients : []}
							setFilterIngredient={(ingredient) => setFilterIngredient(ingredient)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;