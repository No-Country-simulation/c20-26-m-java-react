import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SearchBar from "../components/SearchBar.js";
import ServicesPage from "../pages/ServicesPage.js";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/SearchBar">
                <SearchBar/>
            </ComponentPreview>
            <ComponentPreview path="/ServicesPage">
                <ServicesPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews