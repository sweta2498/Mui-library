import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Checkbox, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const CakeSection = () => {

    const cakes = [
        { name: "Chocolate", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80" },
        { name: "Red Velvet", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80" },
        { name: "Rose", image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
        { name: "Butter Scotch", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80" },
        { name: "Strawberry", image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80" },
        { name: "Strawberry cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzA-V2Q6E0qRi5uh4dP7YA8fIKiOq8H90gFA&usqp=CAU" },
        { name: "Red & white cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWn-_bjKlWW5_qPSr4pUZ0UmsKTm9mnJJiPA&usqp=CAU" },
        { name: "Venila Cake", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHIeK0oQnnH57sKYfJCKKXODuPmVK19n5Gw&usqp=CAU" },
        { name: "Mix fruits", image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
        { name: "D Chocolate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkPBK4kkRyZMnAnf1V5fbCsJLryibD-5zQg&usqp=CAU" },
        { name: "Dark Chocolate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneAvg78bIeVa1jzhvQOIvwJLt49lHcmdvaA&usqp=CAU" },
        { name: "Venila Chocolate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWILYIxb4_dpETMAihlDu1bLOxHm3MAMe2eQ&usqp=CAU" },
        { name: "Butter ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnLorb9G4QM-NQ0wKKHzZ7iVEO5vsgB7zJg&usqp=CAU" },
        { name: "White & red  ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5qRx_5HqLYqgxx2Cg675SO-v-0ZqL3S9wg&usqp=CAU" },
        { name: "Choco Chips", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBcpiUr6rbkYDwV24BeAwdvpn25J6u_dmuw&usqp=CAU" },
        { name: "Chocolate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgBVx_hxtfhEJsg_gw1Nt_j09T8mb9SEkhA&usqp=CAU" },
        { name: "Mix Chocolate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggP_VI-aIxQORWFBMMK2rYdXd1y1LLOl-cA&usqp=CAU" },
        { name: "Mix fruit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlLjmpGsFfNoBTTlzYy5TqXyp-GrM1nGOyA&usqp=CAU" },
        { name: "Dark fantcy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvYw9vQTgUk9C_IUtaWkmw4IGRw225ewJow&usqp=CAU" },
        { name: "Pineple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-7quw3Jv2gjRJvq8Fklw_gKHFegeqMT8GQ&usqp=CAU" },
        { name: "Strawberry Pastry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SHf1Q6YVvf6wWvFZTATzfETIMvFgqrLMyA&usqp=CAU" },
        { name: "Yellow Pastry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOEvq4dnxGLxOpCzU8OrnjLZLO7ABlpihwg&usqp=CAU" },
        { name: "Red velvet", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHiqp5fnGmvzW6ZW9GUu0EWIAEXXD_FlMSQ&usqp=CAU" },
        { name: "Red velvet", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-t_O34La8xR3-AH8F6v21Vn8nkclW0FlFw&usqp=CAU" },
        { name: "Red velvet", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2oGmhgfUu6Us8UqM84qiD7mSv6kRCKU-Gg&usqp=CAU" },

    ]

    const LikeTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: '#864313',
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#864313',
        },
    }));

    return (
        <>
            <Typography variant='h4' mt={6} mb={6}>Cakes - </Typography>

            <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}  >
                {
                    cakes.map((cake, i) => {
                        return (
                            <Card sx={{ width: "300px", mb: 2 }} key={i} >
                                <CardMedia component="img"
                                    height="200"

                                    image={cake.image}
                                    alt='green iguana' />
                                <CardContent>
                                    <Typography variant='h5'>{cake.name}</Typography>
                                </CardContent>

                                <CardContent sx={{ mt: -2 }}>
                                    <LikeTooltip title="Like">
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />} />
                                    </LikeTooltip>
                                    <LikeTooltip title="Save">
                                        <Checkbox sx={{ left: 190 }}
                                            icon={<BookmarkBorderIcon />}
                                            checkedIcon={<BookmarkIcon />} />
                                    </LikeTooltip>

                                </CardContent>
                            </Card>)

                    })
                }

            </Stack>
        </>
    )
}

export default CakeSection