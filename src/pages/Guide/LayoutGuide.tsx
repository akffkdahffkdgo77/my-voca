import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { Button, CustomizedColorPicker, Typography } from 'components';
import Footer from 'layout/Footer';
import tw from 'twin.macro';

import { useTheme } from 'hooks';

export default function LayoutGuide() {
    const { handleClick } = useTheme();

    return (
        <>
            <Typography id="layout" variant="h3" component="h2">
                Layout
            </Typography>
            <div className="space-y-5 rounded bg-white p-5 shadow-md">
                <div className="space-y-5">
                    <Typography variant="b24" fontWeight="700" component="h3">
                        Top Button
                        <Typography variant="b12" component="small" twStyle={tw`ml-5`}>
                            클릭 시 페이지 상단으로 이동
                        </Typography>
                    </Typography>
                    <Button width={50} height={50} type="button" shape="circle" variant="icon" twStyle={tw`bg-black`}>
                        <ArrowUpIcon className="mx-auto h-5 w-5 text-white" />
                    </Button>
                </div>
                <div className="w-full space-y-5">
                    <Typography variant="b24" fontWeight="700" component="h3">
                        Aside
                        <Typography variant="b12" component="small" twStyle={tw`ml-5`}>
                            Desktop(min-width: 1280px)부터 노출
                        </Typography>
                    </Typography>
                    <div className="flex w-max flex-col gap-y-2.5 rounded-full p-1 shadow-md">
                        <CustomizedColorPicker onClick={handleClick} />
                    </div>
                </div>
                <div className="w-full space-y-5">
                    <Typography variant="b24" fontWeight="700" component="h3">
                        Footer
                        <Typography variant="b12" component="small" twStyle={tw`ml-5`}>
                            max-width : 1280px
                        </Typography>
                    </Typography>
                    <Footer />
                </div>
            </div>
        </>
    );
}
