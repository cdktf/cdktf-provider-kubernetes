// https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSigningRequestV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Automatically approve the CertificateSigningRequest
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#auto_approve CertificateSigningRequestV1#auto_approve}
  */
  readonly autoApprove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#id CertificateSigningRequestV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#metadata CertificateSigningRequestV1#metadata}
  */
  readonly metadata: CertificateSigningRequestV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#spec CertificateSigningRequestV1#spec}
  */
  readonly spec: CertificateSigningRequestV1Spec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#timeouts CertificateSigningRequestV1#timeouts}
  */
  readonly timeouts?: CertificateSigningRequestV1Timeouts;
}
export interface CertificateSigningRequestV1Metadata {
  /**
  * An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#annotations CertificateSigningRequestV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#generate_name CertificateSigningRequestV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#labels CertificateSigningRequestV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the certificate signing request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#name CertificateSigningRequestV1#name}
  */
  readonly name?: string;
}

export function certificateSigningRequestV1MetadataToTerraform(struct?: CertificateSigningRequestV1MetadataOutputReference | CertificateSigningRequestV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CertificateSigningRequestV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateSigningRequestV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSigningRequestV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface CertificateSigningRequestV1Spec {
  /**
  * request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. When serialized as JSON or YAML, the data is additionally base64-encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#request CertificateSigningRequestV1#request}
  */
  readonly request: string;
  /**
  * signerName indicates the requested signer, and is a qualified name.

List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.

Well-known Kubernetes signers are:
 1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.
  Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager.
 2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.
  Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
 3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.
  Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.

More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers

Custom signerNames can also be specified. The signer defines:
 1. Trust distribution: how trust (CA bundles) are distributed.
 2. Permitted subjects: and behavior when a disallowed subject is requested.
 3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested.
 4. Required, permitted, or forbidden key usages / extended key usages.
 5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin.
 6. Whether or not requests for CA certificates are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#signer_name CertificateSigningRequestV1#signer_name}
  */
  readonly signerName: string;
  /**
  * usages specifies a set of key usages requested in the issued certificate.

Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".

Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".

Valid values are:
 "signing", "digital signature", "content commitment",
 "key encipherment", "key agreement", "data encipherment",
 "cert sign", "crl sign", "encipher only", "decipher only", "any",
 "server auth", "client auth",
 "code signing", "email protection", "s/mime",
 "ipsec end system", "ipsec tunnel", "ipsec user",
 "timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#usages CertificateSigningRequestV1#usages}
  */
  readonly usages?: string[];
}

export function certificateSigningRequestV1SpecToTerraform(struct?: CertificateSigningRequestV1SpecOutputReference | CertificateSigningRequestV1Spec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: cdktf.stringToTerraform(struct!.request),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
    usages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.usages),
  }
}

export class CertificateSigningRequestV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateSigningRequestV1Spec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSigningRequestV1Spec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._request = undefined;
      this._signerName = undefined;
      this._usages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._request = value.request;
      this._signerName = value.signerName;
      this._usages = value.usages;
    }
  }

  // request - computed: false, optional: false, required: true
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // signer_name - computed: false, optional: false, required: true
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string[]; 
  public get usages() {
    return cdktf.Fn.tolist(this.getListAttribute('usages'));
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }
}
export interface CertificateSigningRequestV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1#create CertificateSigningRequestV1#create}
  */
  readonly create?: string;
}

export function certificateSigningRequestV1TimeoutsToTerraform(struct?: CertificateSigningRequestV1TimeoutsOutputReference | CertificateSigningRequestV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class CertificateSigningRequestV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateSigningRequestV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSigningRequestV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}
*/
export class CertificateSigningRequestV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_certificate_signing_request_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSigningRequestV1Config
  */
  public constructor(scope: Construct, id: string, config: CertificateSigningRequestV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_certificate_signing_request_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.12.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoApprove = config.autoApprove;
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_approve - computed: false, optional: true, required: false
  private _autoApprove?: boolean | cdktf.IResolvable; 
  public get autoApprove() {
    return this.getBooleanAttribute('auto_approve');
  }
  public set autoApprove(value: boolean | cdktf.IResolvable) {
    this._autoApprove = value;
  }
  public resetAutoApprove() {
    this._autoApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveInput() {
    return this._autoApprove;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CertificateSigningRequestV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSigningRequestV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CertificateSigningRequestV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CertificateSigningRequestV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateSigningRequestV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateSigningRequestV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_approve: cdktf.booleanToTerraform(this._autoApprove),
      id: cdktf.stringToTerraform(this._id),
      metadata: certificateSigningRequestV1MetadataToTerraform(this._metadata.internalValue),
      spec: certificateSigningRequestV1SpecToTerraform(this._spec.internalValue),
      timeouts: certificateSigningRequestV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
