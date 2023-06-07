import React from 'react'
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Button from '@mui/material/Button';
import working from '../../public/working.png'
import computer from '../../public/computer.png'
import creating from '../../public/creating.png'
import VR from '../../public/VR.png'
import Typography from '@mui/material/Typography';
import { lightGreen, cyan, red } from '@mui/material/colors';

const colorGreenTopic = lightGreen[400];
const color = red[500];

type Props = {}

const homepage = (props: Props) => {
    return (
        <div style={{ backgroundImage: "linear-gradient(315deg, #61e5d5 9%, #ebdfbb 73%)" }}>

            {/* Part1 */}
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Button variant="text">Home</Button>
                <Button variant="text">About</Button>
                <Button variant="text">Service</Button>
                <Button variant="text">Contact</Button>

            </Stack>

            {/* Part2 */}

            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <div>
                    <Typography variant="topicHeader1" gutterBottom>
                        Topic
                    </Typography>
                    <br />
                    <Typography variant="topicHeader2" gutterBottom>
                        Topic
                    </Typography>

                    <Typography variant="h4" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga voluptatum vitae assumenda pariatur, quo eum magni minima quas fugiat!
                    </Typography>
                    

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: lightGreen[400] }} color='success'>Home</Button>
                        <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: red }} color='error'>About</Button>
                    </Stack>
                </div>

                {/* image */}
                <Image src={working} alt={'title'} height={500} width={500} priority={true} />
            </Stack>

            {/* Part3 */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Image src={VR} alt={'title'} height={500} width={500} priority={true} />

                <Typography variant="h4" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores omnis culpa obcaecati iure reprehenderit dolorum veniam, temporibus commodi accusantium.
                </Typography>
            </Stack>


            {/* Part4 */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>

                <Typography variant="h4" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores omnis culpa obcaecati iure reprehenderit dolorum veniam, temporibus commodi accusantium.
                </Typography>

                <Image src={computer} alt={'title'} height={500} width={500} priority={true} />

            </Stack>


            {/* Part5 */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Image src={creating} alt={'title'} height={500} width={500} priority={true} />

                <Typography variant="h4" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores omnis culpa obcaecati iure reprehenderit dolorum veniam, temporibus commodi accusantium.
                </Typography>
            </Stack>

        </div>
    )
}

export default homepage