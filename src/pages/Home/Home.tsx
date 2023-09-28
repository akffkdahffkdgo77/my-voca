import LinkButton from './LinkButton';

export default function Home() {
    return (
        <div className="flex w-full items-center justify-center [height:calc(100vh-100px)]">
            <div className="flex w-full items-center justify-evenly">
                <LinkButton path="/add" text="NEW" />
                <LinkButton path="/list" text="EXISTING" />
            </div>
        </div>
    );
}
