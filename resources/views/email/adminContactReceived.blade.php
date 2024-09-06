<div>
    You have received a general contact inquiry from {{ "{$request->firstname} {$request->lastname}" }}.
</div>
<div style="border-bottom: 1px solid #e5e3e3;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Name</div>
        <div>{{ "{$request->firstname} {$request->lastname}" }}</div>
    </div>
</div>
<div style="border-bottom: 1px solid #e5e3e3;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Email</div>
        <div>{{ $request->email }}</div>
    </div>
</div>
<div style="border-bottom: 1px solid #e5e3e3;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Phone</div>
        <div>{{ $request->phone }}</div>
    </div>
</div>
<div style="border-bottom: 1px solid #ffffff00;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Subject</div>
        <div>{{ $request->subject }}</div>
    </div>
</div>
<div style="border-bottom: 1px solid #ffffff00;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Message</div>
        <div>{{ $request->message }}</div>
    </div>
</div>
<div style="margin-top:2rem">
    You can directly reply to {{ "{$request->firstname} {$request->lastname}" }} through this email.
</div>
