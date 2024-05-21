import styles from "./styles.module.css";

const Ingredient = ({ ingredients, filterIngredient, setFilterIngredient }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterIngredient, input.value];
			setFilterIngredient(state);
		} else {
			const state = filterIngredient.filter((val) => val !== input.value);
			setFilterIngredient(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Ingredient</h1>
			<div className={styles.ingredient_container}>
				{ingredients.map((ingredient) => (
					<div className={styles.ingredient} key={ingredient}>
						<input
							className={styles.ingredient_input}
							type="checkbox"
							value={ingredient}
							onChange={onChange}
						/>
						<p className={styles.ingredient_label}>{ingredient}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Ingredient;
