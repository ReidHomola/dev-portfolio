import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <ol className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={index} // Use a unique identifier if available
                        title={item.title}
                        year={item.year}
                        duration={item.duration ?? ''}
                        details={item.details}
                    />
                ))}
            </ol>
        </div>
    );
}

export default Timeline;
