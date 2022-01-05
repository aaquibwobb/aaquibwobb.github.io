import {
	Box,
	Checkbox,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';
import { useCallback } from 'react';
import { Category } from '../../../models';

const CategoryList = Object.values(Category);

interface Props {
	items: Category[];
	onChange(values: Category[]): any;
}

export function CategoryPicker(props: Props) {
	const onChecked = useCallback(
		(category: Category, check: boolean) => {
			let next = [...props.items];
			if (check) {
				if (!next.includes(category)) {
					next.push(category);
				}
			} else {
				next = next.filter(c => c !== category);
			}
			props.onChange(next);
		},
		[props]
	);

	return (
		<Box minWidth='320px'>
			<List dense disablePadding>
				{CategoryList.map(c => {
					let checked = props.items.includes(c);
					return (
						<ListItem dense button key={c}>
							<ListItemAvatar>
								<Checkbox
									color='primary'
									size='small'
									checked={checked}
									onChange={() => onChecked(c, !checked)}
								/>
							</ListItemAvatar>
							<ListItemText primary={c} />
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
}
