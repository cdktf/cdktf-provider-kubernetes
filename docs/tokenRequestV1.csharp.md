# `tokenRequestV1` Submodule <a name="`tokenRequestV1` Submodule" id="@cdktf/provider-kubernetes.tokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenRequestV1 <a name="TokenRequestV1" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1(Construct Scope, string Id, TokenRequestV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config">TokenRequestV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config">TokenRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata"></a>

```csharp
private void PutMetadata(TokenRequestV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec"></a>

```csharp
private void PutSpec(TokenRequestV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TokenRequestV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

TokenRequestV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

TokenRequestV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

TokenRequestV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

TokenRequestV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TokenRequestV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TokenRequestV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TokenRequestV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TokenRequestV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference">TokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference">TokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadata"></a>

```csharp
public TokenRequestV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference">TokenRequestV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.spec"></a>

```csharp
public TokenRequestV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference">TokenRequestV1SpecOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.metadataInput"></a>

```csharp
public TokenRequestV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.specInput"></a>

```csharp
public TokenRequestV1Spec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenRequestV1Config <a name="TokenRequestV1Config" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    TokenRequestV1Metadata Metadata,
    string Id = null,
    TokenRequestV1Spec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#id TokenRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.metadata"></a>

```csharp
public TokenRequestV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#metadata TokenRequestV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#id TokenRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Config.property.spec"></a>

```csharp
public TokenRequestV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#spec TokenRequestV1#spec}

---

### TokenRequestV1Metadata <a name="TokenRequestV1Metadata" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the token request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the token request. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the token request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the token request must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the token request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#annotations TokenRequestV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#generate_name TokenRequestV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the token request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#labels TokenRequestV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the token request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#name TokenRequestV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the token request must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#namespace TokenRequestV1#namespace}

---

### TokenRequestV1Spec <a name="TokenRequestV1Spec" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1Spec {
    string[] Audiences = null,
    TokenRequestV1SpecBoundObjectRef BoundObjectRef = null,
    double ExpirationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.audiences">Audiences</a></code> | <code>string[]</code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.boundObjectRef">BoundObjectRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.expirationSeconds">ExpirationSeconds</a></code> | <code>double</code> | expiration_seconds is the requested duration of validity of the request. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#audiences TokenRequestV1#audiences}

---

##### `BoundObjectRef`<sup>Optional</sup> <a name="BoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.boundObjectRef"></a>

```csharp
public TokenRequestV1SpecBoundObjectRef BoundObjectRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#bound_object_ref TokenRequestV1#bound_object_ref}

---

##### `ExpirationSeconds`<sup>Optional</sup> <a name="ExpirationSeconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec.property.expirationSeconds"></a>

```csharp
public double ExpirationSeconds { get; set; }
```

- *Type:* double

expiration_seconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response. The expiration can't be less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#expiration_seconds TokenRequestV1#expiration_seconds}

---

### TokenRequestV1SpecBoundObjectRef <a name="TokenRequestV1SpecBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1SpecBoundObjectRef {
    string ApiVersion = null,
    string Kind = null,
    string Name = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.apiVersion">ApiVersion</a></code> | <code>string</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.kind">Kind</a></code> | <code>string</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.uid">Uid</a></code> | <code>string</code> | UID of the referent. |

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#api_version TokenRequestV1#api_version}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#kind TokenRequestV1#kind}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#name TokenRequestV1#name}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/resources/token_request_v1#uid TokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenRequestV1MetadataOutputReference <a name="TokenRequestV1MetadataOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1MetadataOutputReference.property.internalValue"></a>

```csharp
public TokenRequestV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Metadata">TokenRequestV1Metadata</a>

---


### TokenRequestV1SpecBoundObjectRefOutputReference <a name="TokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1SpecBoundObjectRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```csharp
private void ResetApiVersion()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```csharp
public TokenRequestV1SpecBoundObjectRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---


### TokenRequestV1SpecOutputReference <a name="TokenRequestV1SpecOutputReference" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new TokenRequestV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef">PutBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetBoundObjectRef">ResetBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetExpirationSeconds">ResetExpirationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoundObjectRef` <a name="PutBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```csharp
private void PutBoundObjectRef(TokenRequestV1SpecBoundObjectRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetBoundObjectRef` <a name="ResetBoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```csharp
private void ResetBoundObjectRef()
```

##### `ResetExpirationSeconds` <a name="ResetExpirationSeconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```csharp
private void ResetExpirationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRef">BoundObjectRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference">TokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRefInput">BoundObjectRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSecondsInput">ExpirationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSeconds">ExpirationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoundObjectRef`<sup>Required</sup> <a name="BoundObjectRef" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```csharp
public TokenRequestV1SpecBoundObjectRefOutputReference BoundObjectRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRefOutputReference">TokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `BoundObjectRefInput`<sup>Optional</sup> <a name="BoundObjectRefInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```csharp
public TokenRequestV1SpecBoundObjectRef BoundObjectRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecBoundObjectRef">TokenRequestV1SpecBoundObjectRef</a>

---

##### `ExpirationSecondsInput`<sup>Optional</sup> <a name="ExpirationSecondsInput" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```csharp
public double ExpirationSecondsInput { get; }
```

- *Type:* double

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `ExpirationSeconds`<sup>Required</sup> <a name="ExpirationSeconds" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```csharp
public double ExpirationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1SpecOutputReference.property.internalValue"></a>

```csharp
public TokenRequestV1Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.tokenRequestV1.TokenRequestV1Spec">TokenRequestV1Spec</a>

---



