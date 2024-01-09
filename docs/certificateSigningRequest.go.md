# `certificateSigningRequest` Submodule <a name="`certificateSigningRequest` Submodule" id="@cdktf/provider-kubernetes.certificateSigningRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateSigningRequest <a name="CertificateSigningRequest" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request kubernetes_certificate_signing_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.NewCertificateSigningRequest(scope Construct, id *string, config CertificateSigningRequestConfig) CertificateSigningRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig">CertificateSigningRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig">CertificateSigningRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetAutoApprove">ResetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata"></a>

```go
func PutMetadata(value CertificateSigningRequestMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec"></a>

```go
func PutSpec(value CertificateSigningRequestSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts"></a>

```go
func PutTimeouts(value CertificateSigningRequestTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

---

##### `ResetAutoApprove` <a name="ResetAutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetAutoApprove"></a>

```go
func ResetAutoApprove()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateSigningRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.CertificateSigningRequest_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.CertificateSigningRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.CertificateSigningRequest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.CertificateSigningRequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CertificateSigningRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CertificateSigningRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CertificateSigningRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CertificateSigningRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference">CertificateSigningRequestMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference">CertificateSigningRequestSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference">CertificateSigningRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApproveInput">AutoApproveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApprove">AutoApprove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadata"></a>

```go
func Metadata() CertificateSigningRequestMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference">CertificateSigningRequestMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.spec"></a>

```go
func Spec() CertificateSigningRequestSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference">CertificateSigningRequestSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeouts"></a>

```go
func Timeouts() CertificateSigningRequestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference">CertificateSigningRequestTimeoutsOutputReference</a>

---

##### `AutoApproveInput`<sup>Optional</sup> <a name="AutoApproveInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApproveInput"></a>

```go
func AutoApproveInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadataInput"></a>

```go
func MetadataInput() CertificateSigningRequestMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.specInput"></a>

```go
func SpecInput() CertificateSigningRequestSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoApprove`<sup>Required</sup> <a name="AutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApprove"></a>

```go
func AutoApprove() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateSigningRequestConfig <a name="CertificateSigningRequestConfig" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

&certificatesigningrequest.CertificateSigningRequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.certificateSigningRequest.CertificateSigningRequestMetadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.certificateSigningRequest.CertificateSigningRequestSpec,
	AutoApprove: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10.certificateSigningRequest.CertificateSigningRequestTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.autoApprove">AutoApprove</a></code> | <code>interface{}</code> | Automatically approve the CertificateSigningRequest. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#id CertificateSigningRequest#id}. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.metadata"></a>

```go
Metadata CertificateSigningRequestMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#metadata CertificateSigningRequest#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.spec"></a>

```go
Spec CertificateSigningRequestSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#spec CertificateSigningRequest#spec}

---

##### `AutoApprove`<sup>Optional</sup> <a name="AutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.autoApprove"></a>

```go
AutoApprove interface{}
```

- *Type:* interface{}

Automatically approve the CertificateSigningRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#auto_approve CertificateSigningRequest#auto_approve}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#id CertificateSigningRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.timeouts"></a>

```go
Timeouts CertificateSigningRequestTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#timeouts CertificateSigningRequest#timeouts}

---

### CertificateSigningRequestMetadata <a name="CertificateSigningRequestMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

&certificatesigningrequest.CertificateSigningRequestMetadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.name">Name</a></code> | <code>*string</code> | Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#annotations CertificateSigningRequest#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#generate_name CertificateSigningRequest#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#labels CertificateSigningRequest#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#name CertificateSigningRequest#name}

---

### CertificateSigningRequestSpec <a name="CertificateSigningRequestSpec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

&certificatesigningrequest.CertificateSigningRequestSpec {
	Request: *string,
	SignerName: *string,
	Usages: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.request">Request</a></code> | <code>*string</code> | Base64-encoded PKCS#10 CSR data. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.signerName">SignerName</a></code> | <code>*string</code> | Requested signer for the request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.usages">Usages</a></code> | <code>*[]*string</code> | allowedUsages specifies a set of usage contexts the key will be valid for. See: 	https://tools.ietf.org/html/rfc5280#section-4.2.1.3 	https://tools.ietf.org/html/rfc5280#section-4.2.1.12. |

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.request"></a>

```go
Request *string
```

- *Type:* *string

Base64-encoded PKCS#10 CSR data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#request CertificateSigningRequest#request}

---

##### `SignerName`<sup>Optional</sup> <a name="SignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.signerName"></a>

```go
SignerName *string
```

- *Type:* *string

Requested signer for the request.

It is a qualified name in the form: `scope-hostname.io/name`.If empty, it will be defaulted: 1. If it's a kubelet client certificate, it is assigned `kubernetes.io/kube-apiserver-client-kubelet`.2. If it's a kubelet serving certificate, it is assigned `kubernetes.io/kubelet-serving`.3. Otherwise, it is assigned `kubernetes.io/legacy-unknown`. Distribution of trust for signers happens out of band.You can select on this field using `spec.signerName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#signer_name CertificateSigningRequest#signer_name}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.usages"></a>

```go
Usages *[]*string
```

- *Type:* *[]*string

allowedUsages specifies a set of usage contexts the key will be valid for. See: 	https://tools.ietf.org/html/rfc5280#section-4.2.1.3 	https://tools.ietf.org/html/rfc5280#section-4.2.1.12.

Valid values are:
"signing",
"digital signature",
"content commitment",
"key encipherment",
"key agreement",
"data encipherment",
"cert sign",
"crl sign",
"encipher only",
"decipher only",
"any",
"server auth",
"client auth",
"code signing",
"email protection",
"s/mime",
"ipsec end system",
"ipsec tunnel",
"ipsec user",
"timestamping",
"ocsp signing",
"microsoft sgc",
"netscape sgc"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#usages CertificateSigningRequest#usages}

---

### CertificateSigningRequestTimeouts <a name="CertificateSigningRequestTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

&certificatesigningrequest.CertificateSigningRequestTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#create CertificateSigningRequest#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/certificate_signing_request#create CertificateSigningRequest#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateSigningRequestMetadataOutputReference <a name="CertificateSigningRequestMetadataOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.NewCertificateSigningRequestMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateSigningRequestMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateSigningRequestMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---


### CertificateSigningRequestSpecOutputReference <a name="CertificateSigningRequestSpecOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.NewCertificateSigningRequestSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateSigningRequestSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetSignerName">ResetSignerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSignerName` <a name="ResetSignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetSignerName"></a>

```go
func ResetSignerName()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetUsages"></a>

```go
func ResetUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerNameInput">SignerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usagesInput">UsagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerName">SignerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `SignerNameInput`<sup>Optional</sup> <a name="SignerNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerNameInput"></a>

```go
func SignerNameInput() *string
```

- *Type:* *string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usagesInput"></a>

```go
func UsagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `SignerName`<sup>Required</sup> <a name="SignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerName"></a>

```go
func SignerName() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateSigningRequestSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---


### CertificateSigningRequestTimeoutsOutputReference <a name="CertificateSigningRequestTimeoutsOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v10/certificatesigningrequest"

certificatesigningrequest.NewCertificateSigningRequestTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateSigningRequestTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



