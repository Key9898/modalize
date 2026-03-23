import { useModal, FormModal } from '../../index';
import { CodeBlock } from '../components/CodeBlock';

const codeExample = `import { useModal, FormModal } from 'modalize';

function Example() {
  const { isOpen, open, close } = useModal();

  const handleSubmit = (data) => {
    console.log(data);
    close();
  };

  return (
    <>
      <button onClick={open}>New Feedback</button>
      <FormModal
        isOpen={isOpen}
        onClose={close}
        title="Product Feedback"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label className="label">Your Comments</label>
          <textarea name="comments" className="textarea" />
        </div>
      </FormModal>
    </>
  );
}`;

export function FormModalDemo() {
  const { isOpen, open, close } = useModal();

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-3xl font-bold font-display">Form Modal</h2>
        <p className="text-base-content/60 leading-relaxed">
          Generic form container modal. Useful for any kind of custom data entry flows.
        </p>
      </section>

      <section className="card bg-base-200/50 p-12 border border-base-300 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <button className="btn btn-primary btn-md px-8 shadow-lg shadow-primary/20" onClick={open}>
            New Feedback
          </button>
          <p className="text-[12px] font-medium text-base-content/40 tracking-tight uppercase">
            Click to see form rendering and rating system
          </p>
        </div>

        <FormModal
          isOpen={isOpen}
          onClose={close}
          title="Product Feedback"
          onSubmit={data => { alert(JSON.stringify(data)); close(); }}
        >
          <div className="form-control">
            <label className="label"><span className="label-text-alt font-bold text-base-content/40 uppercase">Rating</span></label>
            <div className="rating">
               <input type="radio" name="rating" className="mask mask-star-2 bg-warning" value="1" />
               <input type="radio" name="rating" className="mask mask-star-2 bg-warning" value="2" />
               <input type="radio" name="rating" className="mask mask-star-2 bg-warning" value="3" checked />
               <input type="radio" name="rating" className="mask mask-star-2 bg-warning" value="4" />
               <input type="radio" name="rating" className="mask mask-star-2 bg-warning" value="5" />
            </div>
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text-alt font-bold text-base-content/40 uppercase">Your Comments</span></label>
            <textarea name="comments" className="textarea textarea-bordered h-24 bg-base-100 border-none" placeholder="How can we improve?"></textarea>
          </div>
        </FormModal>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <h3 className="text-xl font-bold">Usage</h3>
        </div>
        <CodeBlock code={codeExample} />
      </section>
    </div>
  );
}
