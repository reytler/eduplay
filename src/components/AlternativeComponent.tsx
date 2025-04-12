export function AlternativeComponent({ alternative, onClick }: { alternative: { id: number; text: string; isCorrect: boolean }; onClick: (id: number) => void }) {
    return (
        <div key={alternative.id}>
            <button onClick={() => onClick(alternative.id)}>{alternative.text}</button>
        </div>
    );
}