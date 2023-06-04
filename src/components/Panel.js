import classNames from "classnames";


function Panel({children, classesProp, ...rest}){
	const classes =  classNames(
		'border-rounded p-3 shadow bg-white w-full', 
		classesProp
	);

	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	)
}

export default Panel;