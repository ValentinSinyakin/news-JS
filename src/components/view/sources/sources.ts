
import { Sources as SourcesType } from '../../helpers/types';
import './sources.css';

class Sources {
    draw(data: SourcesType[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true);

        ((sourceClone as Element).querySelector('.source__item-name') as Element).textContent = item.name;
        ((sourceClone as Element).querySelector('.source__item') as Element).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLTemplateElement ).append(fragment);
    }
}

export default Sources;
