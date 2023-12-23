import { Box, styled } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Image = styled(Box)`
`

export const UserIcon = ({ username, picUrl }) => {
        return (
                <div>
                        <Image>
                                {
                                        picUrl?
                                                <img src={picUrl} />
                                                :
                                                <AccountCircleIcon/>
                                }
                        </Image>
                </div>
        )
}