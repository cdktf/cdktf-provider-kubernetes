# `endpointSliceV1` Submodule <a name="`endpointSliceV1` Submodule" id="@cdktf/provider-kubernetes.endpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointSliceV1 <a name="EndpointSliceV1" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1(scope Construct, id *string, config EndpointSliceV1Config) EndpointSliceV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config">EndpointSliceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config">EndpointSliceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort">PutPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint"></a>

```go
func PutEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata"></a>

```go
func PutMetadata(value EndpointSliceV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---

##### `PutPort` <a name="PutPort" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort"></a>

```go
func PutPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.putPort.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EndpointSliceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.EndpointSliceV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.EndpointSliceV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.EndpointSliceV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.EndpointSliceV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EndpointSliceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EndpointSliceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList">EndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference">EndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList">EndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressTypeInput">AddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpointInput">EndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.portInput">PortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressType">AddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpoint"></a>

```go
func Endpoint() EndpointSliceV1EndpointList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList">EndpointSliceV1EndpointList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadata"></a>

```go
func Metadata() EndpointSliceV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference">EndpointSliceV1MetadataOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.port"></a>

```go
func Port() EndpointSliceV1PortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList">EndpointSliceV1PortList</a>

---

##### `AddressTypeInput`<sup>Optional</sup> <a name="AddressTypeInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressTypeInput"></a>

```go
func AddressTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.endpointInput"></a>

```go
func EndpointInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.metadataInput"></a>

```go
func MetadataInput() EndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.portInput"></a>

```go
func PortInput() interface{}
```

- *Type:* interface{}

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.addressType"></a>

```go
func AddressType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointSliceV1Config <a name="EndpointSliceV1Config" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

&endpointslicev1.EndpointSliceV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AddressType: *string,
	Endpoint: interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.endpointSliceV1.EndpointSliceV1Metadata,
	Port: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.addressType">AddressType</a></code> | <code>*string</code> | address_type specifies the type of address carried by this EndpointSlice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.endpoint">Endpoint</a></code> | <code>interface{}</code> | endpoint block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.port">Port</a></code> | <code>interface{}</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.addressType"></a>

```go
AddressType *string
```

- *Type:* *string

address_type specifies the type of address carried by this EndpointSlice.

All addresses in this slice must be the same type. This field is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#address_type EndpointSliceV1#address_type}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.endpoint"></a>

```go
Endpoint interface{}
```

- *Type:* interface{}

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#endpoint EndpointSliceV1#endpoint}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.metadata"></a>

```go
Metadata EndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#metadata EndpointSliceV1#metadata}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.port"></a>

```go
Port interface{}
```

- *Type:* interface{}

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#id EndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EndpointSliceV1Endpoint <a name="EndpointSliceV1Endpoint" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

&endpointslicev1.EndpointSliceV1Endpoint {
	Addresses: *[]*string,
	Condition: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition,
	Hostname: *string,
	NodeName: *string,
	TargetRef: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.addresses">Addresses</a></code> | <code>*[]*string</code> | addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.hostname">Hostname</a></code> | <code>*string</code> | hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.nodeName">NodeName</a></code> | <code>*string</code> | nodeName represents the name of the Node hosting this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.targetRef">TargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.zone">Zone</a></code> | <code>*string</code> | zone is the name of the Zone this endpoint exists in. |

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.addresses"></a>

```go
Addresses *[]*string
```

- *Type:* *[]*string

addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#addresses EndpointSliceV1#addresses}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.condition"></a>

```go
Condition EndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#condition EndpointSliceV1#condition}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#hostname EndpointSliceV1#hostname}

---

##### `NodeName`<sup>Optional</sup> <a name="NodeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.nodeName"></a>

```go
NodeName *string
```

- *Type:* *string

nodeName represents the name of the Node hosting this endpoint.

This can be used to determine endpoints local to a Node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#node_name EndpointSliceV1#node_name}

---

##### `TargetRef`<sup>Optional</sup> <a name="TargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.targetRef"></a>

```go
TargetRef EndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#target_ref EndpointSliceV1#target_ref}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Endpoint.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

zone is the name of the Zone this endpoint exists in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#zone EndpointSliceV1#zone}

---

### EndpointSliceV1EndpointCondition <a name="EndpointSliceV1EndpointCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

&endpointslicev1.EndpointSliceV1EndpointCondition {
	Ready: interface{},
	Serving: interface{},
	Terminating: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.ready">Ready</a></code> | <code>interface{}</code> | ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.serving">Serving</a></code> | <code>interface{}</code> | serving is identical to ready except that it is set regardless of the terminating state of endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.terminating">Terminating</a></code> | <code>interface{}</code> | terminating indicates that this endpoint is terminating. |

---

##### `Ready`<sup>Optional</sup> <a name="Ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.ready"></a>

```go
Ready interface{}
```

- *Type:* interface{}

ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#ready EndpointSliceV1#ready}

---

##### `Serving`<sup>Optional</sup> <a name="Serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.serving"></a>

```go
Serving interface{}
```

- *Type:* interface{}

serving is identical to ready except that it is set regardless of the terminating state of endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#serving EndpointSliceV1#serving}

---

##### `Terminating`<sup>Optional</sup> <a name="Terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition.property.terminating"></a>

```go
Terminating interface{}
```

- *Type:* interface{}

terminating indicates that this endpoint is terminating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#terminating EndpointSliceV1#terminating}

---

### EndpointSliceV1EndpointTargetRef <a name="EndpointSliceV1EndpointTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

&endpointslicev1.EndpointSliceV1EndpointTargetRef {
	Name: *string,
	FieldPath: *string,
	Namespace: *string,
	ResourceVersion: *string,
	Uid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.name">Name</a></code> | <code>*string</code> | Name of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.fieldPath">FieldPath</a></code> | <code>*string</code> | If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | Specific resourceVersion to which this reference is made, if any. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.uid">Uid</a></code> | <code>*string</code> | If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#field_path EndpointSliceV1#field_path}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

##### `ResourceVersion`<sup>Optional</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.resourceVersion"></a>

```go
ResourceVersion *string
```

- *Type:* *string

Specific resourceVersion to which this reference is made, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#resource_version EndpointSliceV1#resource_version}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef.property.uid"></a>

```go
Uid *string
```

- *Type:* *string

If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#uid EndpointSliceV1#uid}

---

### EndpointSliceV1Metadata <a name="EndpointSliceV1Metadata" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

&endpointslicev1.EndpointSliceV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#annotations EndpointSliceV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#generate_name EndpointSliceV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#labels EndpointSliceV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#namespace EndpointSliceV1#namespace}

---

### EndpointSliceV1Port <a name="EndpointSliceV1Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

&endpointslicev1.EndpointSliceV1Port {
	AppProtocol: *string,
	Port: *string,
	Name: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.appProtocol">AppProtocol</a></code> | <code>*string</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.port">Port</a></code> | <code>*string</code> | port represents the port number of the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.name">Name</a></code> | <code>*string</code> | name represents the name of this port. All ports in an EndpointSlice must have a unique name. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.protocol">Protocol</a></code> | <code>*string</code> | protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. |

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.appProtocol"></a>

```go
AppProtocol *string
```

- *Type:* *string

The application protocol for this port.

This is used as a hint for implementations to offer richer behavior for protocols that they understand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#app_protocol EndpointSliceV1#app_protocol}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.port"></a>

```go
Port *string
```

- *Type:* *string

port represents the port number of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#port EndpointSliceV1#port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.name"></a>

```go
Name *string
```

- *Type:* *string

name represents the name of this port. All ports in an EndpointSlice must have a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#name EndpointSliceV1#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Port.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/endpoint_slice_v1#protocol EndpointSliceV1#protocol}

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointSliceV1EndpointConditionOutputReference <a name="EndpointSliceV1EndpointConditionOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1EndpointConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EndpointSliceV1EndpointConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetReady">ResetReady</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetServing">ResetServing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetTerminating">ResetTerminating</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReady` <a name="ResetReady" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetReady"></a>

```go
func ResetReady()
```

##### `ResetServing` <a name="ResetServing" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetServing"></a>

```go
func ResetServing()
```

##### `ResetTerminating` <a name="ResetTerminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.resetTerminating"></a>

```go
func ResetTerminating()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.readyInput">ReadyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.servingInput">ServingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminatingInput">TerminatingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.ready">Ready</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.serving">Serving</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminating">Terminating</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadyInput`<sup>Optional</sup> <a name="ReadyInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.readyInput"></a>

```go
func ReadyInput() interface{}
```

- *Type:* interface{}

---

##### `ServingInput`<sup>Optional</sup> <a name="ServingInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.servingInput"></a>

```go
func ServingInput() interface{}
```

- *Type:* interface{}

---

##### `TerminatingInput`<sup>Optional</sup> <a name="TerminatingInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminatingInput"></a>

```go
func TerminatingInput() interface{}
```

- *Type:* interface{}

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```go
func Ready() interface{}
```

- *Type:* interface{}

---

##### `Serving`<sup>Required</sup> <a name="Serving" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```go
func Serving() interface{}
```

- *Type:* interface{}

---

##### `Terminating`<sup>Required</sup> <a name="Terminating" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```go
func Terminating() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() EndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---


### EndpointSliceV1EndpointList <a name="EndpointSliceV1EndpointList" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1EndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EndpointSliceV1EndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get"></a>

```go
func Get(index *f64) EndpointSliceV1EndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EndpointSliceV1EndpointOutputReference <a name="EndpointSliceV1EndpointOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1EndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EndpointSliceV1EndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef">PutTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetNodeName">ResetNodeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetTargetRef">ResetTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition"></a>

```go
func PutCondition(value EndpointSliceV1EndpointCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---

##### `PutTargetRef` <a name="PutTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef"></a>

```go
func PutTargetRef(value EndpointSliceV1EndpointTargetRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.putTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetNodeName` <a name="ResetNodeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetNodeName"></a>

```go
func ResetNodeName()
```

##### `ResetTargetRef` <a name="ResetTargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetTargetRef"></a>

```go
func ResetTargetRef()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference">EndpointSliceV1EndpointConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRef">TargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference">EndpointSliceV1EndpointTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addressesInput">AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRefInput">TargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.condition"></a>

```go
func Condition() EndpointSliceV1EndpointConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointConditionOutputReference">EndpointSliceV1EndpointConditionOutputReference</a>

---

##### `TargetRef`<sup>Required</sup> <a name="TargetRef" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```go
func TargetRef() EndpointSliceV1EndpointTargetRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference">EndpointSliceV1EndpointTargetRefOutputReference</a>

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addressesInput"></a>

```go
func AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.conditionInput"></a>

```go
func ConditionInput() EndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointCondition">EndpointSliceV1EndpointCondition</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeNameInput"></a>

```go
func NodeNameInput() *string
```

- *Type:* *string

---

##### `TargetRefInput`<sup>Optional</sup> <a name="TargetRefInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.targetRefInput"></a>

```go
func TargetRefInput() EndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EndpointSliceV1EndpointTargetRefOutputReference <a name="EndpointSliceV1EndpointTargetRefOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1EndpointTargetRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EndpointSliceV1EndpointTargetRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetResourceVersion">ResetResourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetResourceVersion` <a name="ResetResourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetResourceVersion"></a>

```go
func ResetResourceVersion()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.resetUid"></a>

```go
func ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersionInput">ResourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uidInput">UidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceVersionInput`<sup>Optional</sup> <a name="ResourceVersionInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersionInput"></a>

```go
func ResourceVersionInput() *string
```

- *Type:* *string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uidInput"></a>

```go
func UidInput() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```go
func InternalValue() EndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1EndpointTargetRef">EndpointSliceV1EndpointTargetRef</a>

---


### EndpointSliceV1MetadataOutputReference <a name="EndpointSliceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EndpointSliceV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() EndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1Metadata">EndpointSliceV1Metadata</a>

---


### EndpointSliceV1PortList <a name="EndpointSliceV1PortList" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1PortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EndpointSliceV1PortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get"></a>

```go
func Get(index *f64) EndpointSliceV1PortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EndpointSliceV1PortOutputReference <a name="EndpointSliceV1PortOutputReference" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/endpointslicev1"

endpointslicev1.NewEndpointSliceV1PortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EndpointSliceV1PortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocolInput">AppProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocol">AppProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppProtocolInput`<sup>Optional</sup> <a name="AppProtocolInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocolInput"></a>

```go
func AppProtocolInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.appProtocol"></a>

```go
func AppProtocol() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.endpointSliceV1.EndpointSliceV1PortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



