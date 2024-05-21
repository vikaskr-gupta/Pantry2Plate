import styles from "./styles.module.css";

const Table = ({ recipes }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.name_tab}>Name</p>
				<p className={styles.ingredient_tab}>Ingredient</p>
				<p className={styles.time_tab}>Time</p>
			</div>
			{recipes.map((recipe) => (
				<div className={styles.recipe} key={recipe._id}>
					<div className={styles.name_container}>
						<img src={recipe.img} alt="recipe" className={styles.recipe_img} />
						<p className={styles.recipe_name}>
							{recipe.name} ({recipe.time})
						</p>
					</div>
					<div className={styles.ingredient_container}>
						{recipe.ingredient.map((ingredient, index) => (
							<p key={ingredient} className={styles.recipe_ingredient}>
								{ingredient}
								{index !== recipe.ingredient.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.time_container}>
						{/* <img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/> */}
						<p className={styles.recipe_time}>{recipe.time} Min</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;
